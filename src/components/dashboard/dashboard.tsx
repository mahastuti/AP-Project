'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { BarChart3, LayoutDashboard, Map } from 'lucide-react';

// bagian berat dimuat hanya saat dibutuhkan, supaya halaman pertama lebih ringan
const DashboardInputData = dynamic(
  () => import('@/components/dashboard/dashboard-input-data'),
  { loading: () => <PanelSkeleton label="Memuat form input…" height="h-[480px]" /> },
);
const PredictSection = dynamic(
  () => import('@/components/dashboard/predict-section'),
  { loading: () => <PanelSkeleton label="Memuat prediksi…" height="h-[480px]" /> },
);
const MapControls = dynamic(() => import('./map-controls'), {
  ssr: false,
  loading: () => <PanelSkeleton label="Memuat peta…" height="h-[520px]" />,
});

type TabId = 'dashboard' | 'predict' | 'map';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'predict', label: 'Predict', icon: BarChart3 },
  { id: 'map', label: 'Map', icon: Map },
] as const;

function PanelSkeleton({ label, height }: { label: string; height: string }) {
  return (
    <div
      role="status"
      className={`${height} grid w-full place-items-center rounded-lg border-2 border-gray-300 bg-white text-sm text-gray-500`}
    >
      {label}
    </div>
  );
}

function CardHeader({ title }: { title: string }) {
  return (
    <div className="rounded-t-lg border-b border-gray-300 bg-[#40A3DC] p-3">
      <h2 className="text-center text-xl font-medium text-white sm:text-2xl">{title}</h2>
    </div>
  );
}

export default function Dashboard() {
  const [selected, setSelected] = useState<TabId>('dashboard');

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      {/* menu: tab horizontal di layar kecil, sidebar di layar besar */}
      <aside className="border-b border-gray-300 bg-white p-3 lg:w-60 lg:shrink-0 lg:border-b-0 lg:border-r lg:p-5">
        <nav
          aria-label="Menu dashboard"
          className="grid grid-cols-3 gap-2 lg:sticky lg:top-24 lg:grid-cols-1 lg:gap-3"
        >
          {tabs.map(({ id, label, icon: Icon }) => {
            const active = selected === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setSelected(id)}
                aria-pressed={active}
                className={`flex items-center justify-center gap-2 rounded-lg border-2 px-2 py-2.5 text-sm font-medium text-white transition-colors sm:px-3 lg:justify-start lg:px-4 lg:py-3 lg:text-base ${
                  active
                    ? 'border-gray-300 bg-linear-to-r from-[#72BB34] to-[#40A3DC] hover:opacity-90'
                    : 'border-transparent bg-[#83C8EF] hover:bg-[#6fbbe6]'
                }`}
              >
                <Icon className="size-5 shrink-0" />
                {label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* konten */}
      <div className="min-w-0 flex-1 p-4 sm:p-6">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          {selected === 'dashboard' && (
            <>
              <div className="rounded-lg border-2 border-gray-300 bg-white">
                <CardHeader title="DASHBOARD" />
                <div className="p-2">
                  {/* tinggi dipatok supaya halaman tidak bergeser saat iframe selesai dimuat */}
                  <div className="relative mx-auto h-[520px] w-full max-w-5xl overflow-hidden rounded bg-gray-100 sm:h-[640px] lg:h-[750px]">
                    <span className="absolute inset-0 grid place-items-center text-sm text-gray-500">
                      Memuat dashboard…
                    </span>
                    <iframe
                      title="Looker Studio Dashboard"
                      src="https://lookerstudio.google.com/embed/reporting/527a0a62-796f-4889-85e2-14c548a217b6/page/bpxSF"
                      className="relative h-full w-full border-0"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <DashboardInputData />

              <div className="flex justify-center pb-2">
                <button
                  type="button"
                  onClick={() => {
                    try {
                      localStorage.removeItem('isAuthenticated');
                      window.location.reload();
                    } catch (error) {
                      console.warn('localStorage not available:', error);
                    }
                  }}
                  className="relative w-full overflow-hidden rounded-lg bg-red-500 px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 ease-in-out before:absolute before:inset-0 before:-translate-x-full before:bg-white/20 before:transition-transform before:duration-500 hover:shadow-xl hover:before:translate-x-full"
                >
                  Logout
                </button>
              </div>
            </>
          )}

          {selected === 'predict' && <PredictSection />}

          {selected === 'map' && (
            <div className="rounded-lg border-2 border-gray-300 bg-white">
              <CardHeader title="MAP" />
              <MapControls />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
