-- grant_applications: schools/orgs apply for free kits
create table if not exists public.grant_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  org_name text,
  org_type text,
  contact text,
  region text,
  student_count text,
  message text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.grant_applications enable row level security;

create policy "Users can read own grant_applications"
  on public.grant_applications for select
  using (auth.uid() = user_id);

create policy "Users can insert own grant_applications"
  on public.grant_applications for insert
  with check (auth.uid() = user_id);
