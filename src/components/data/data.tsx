"use client"

import { useState } from "react";
import DataTable from "@/components/data/data-table";

const TYPES = [
  { id: 'bird-strike', label: 'Bird Strike' },
  { id: 'bird-species', label: 'Bird Species' },
  { id: 'traffic-flight', label: 'Traffic Flight' },
  { id: 'modeling', label: 'Modeling' },
] as const;

type TypeId = (typeof TYPES)[number]['id'];

export default function Data() {
  const [selectedDataType, setSelectedDataType] = useState<TypeId>('bird-strike');
  const [exportScope, setExportScope] = useState<'all' | 'filtered'>('all');

  return (
    <div className="flex-1 px-3 py-6 sm:p-8">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-medium text-gray-800 sm:text-3xl">Data</h1>
      </div>

      {/* Main Content Card */}
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-lg border-2 border-gray-300 bg-white">

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-2 bg-white p-4 sm:gap-3 sm:p-6">
            {TYPES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedDataType(id)}
                aria-pressed={selectedDataType === id}
                className={`rounded-lg border-2 px-4 py-2.5 text-sm transition-colors sm:px-6 sm:py-3 sm:text-base ${
                  selectedDataType === id
                    ? 'border-gray-300 bg-linear-to-r from-[#72BB34] to-[#40A3DC] text-white hover:opacity-90'
                    : 'border-transparent bg-[#83C8EF] font-medium text-white hover:bg-[#6fbbe6]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dropdown area */}
          <div className="flex justify-end px-4 pb-2 sm:px-6">
            <label className="flex items-center gap-2 text-sm">
              <span className="text-gray-700">Download:</span>
              <select
                value={exportScope}
                onChange={(e) => setExportScope(e.target.value as 'all' | 'filtered')}
                className="rounded border border-gray-300 bg-white px-3 py-2 text-sm"
              >
                <option value="all">Semua baris</option>
                <option value="filtered">Hasil filter saat ini</option>
              </select>
            </label>
          </div>

          {/* Content Area: tinggi minimum dipatok supaya halaman tidak melompat saat data selesai dimuat */}
          <div className="bg-white p-3 sm:p-6">
            <div className="min-h-[760px]">
              {/* key memaksa tabel dibuat ulang saat pindah tab, state lama tidak terbawa */}
              <DataTable key={selectedDataType} dataType={selectedDataType} exportScope={exportScope} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
