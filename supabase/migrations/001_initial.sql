-- profiles: extends auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'customer' check (role in ('customer', 'partner')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS
alter table public.profiles enable row level security;

create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Service role or trigger can insert on signup
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- purchase_requests
create table if not exists public.purchase_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  product_id text not null default 'first_series',
  status text not null default 'pending' check (status in ('pending', 'contacted', 'fulfilled', 'cancelled')),
  details jsonb default '{}',
  created_at timestamptz not null default now()
);

alter table public.purchase_requests enable row level security;

create policy "Users can read own purchase_requests"
  on public.purchase_requests for select
  using (auth.uid() = user_id);

create policy "Users can insert own purchase_requests"
  on public.purchase_requests for insert
  with check (auth.uid() = user_id);

-- partner_applications
create table if not exists public.partner_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  org_name text,
  contact text,
  region text,
  message text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.partner_applications enable row level security;

create policy "Users can read own partner_applications"
  on public.partner_applications for select
  using (auth.uid() = user_id);

create policy "Users can insert own partner_applications"
  on public.partner_applications for insert
  with check (auth.uid() = user_id);

-- chapter_applications
create table if not exists public.chapter_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  region text,
  contact text,
  message text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.chapter_applications enable row level security;

create policy "Users can read own chapter_applications"
  on public.chapter_applications for select
  using (auth.uid() = user_id);

create policy "Users can insert own chapter_applications"
  on public.chapter_applications for insert
  with check (auth.uid() = user_id);

-- Create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
