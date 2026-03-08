"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon in Next.js
function useFixMarkerIcon() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);
}

export type Location = {
  id: string;
  name: string;
  type: "team" | "chapter" | "partner";
  region: string;
  lat?: number;
  lng?: number;
};

const DEFAULT_CENTER: [number, number] = [42.3, 69.6];
const DEFAULT_ZOOM = 5;

// Locations with coords, or fallback to a grid so all show
function withCoords(locations: Location[]): { lat: number; lng: number; loc: Location }[] {
  const withCoord = locations.filter((loc): loc is Location & { lat: number; lng: number } =>
    typeof loc.lat === "number" && typeof loc.lng === "number"
  );
  if (withCoord.length > 0) return withCoord.map((loc) => ({ lat: loc.lat!, lng: loc.lng!, loc }));
  // Placeholder: spread around default center so list is still useful
  return locations.map((loc, i) => ({
    lat: DEFAULT_CENTER[0] + (i % 3) * 10 - 10,
    lng: DEFAULT_CENTER[1] + Math.floor(i / 3) * 15 - 15,
    loc,
  }));
}

export function CommunityMapClient({ locations }: { locations: Location[] }) {
  useFixMarkerIcon();
  const points = withCoords(locations);

  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden h-64">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        className="h-full w-full"
        scrollWheelZoom={true}
        aria-label="Map of partner teams and chapters"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map(({ lat, lng, loc }) => (
          <Marker key={loc.id} position={[lat, lng]}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.region} — {loc.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
