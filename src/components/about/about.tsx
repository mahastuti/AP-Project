"use client"

import Image from "next/image";
import { assets } from "@/assets/assets";

const card = "rounded-lg border-2 border-gray-400 bg-white p-5 sm:p-8";
const heading = "mb-5 text-center text-2xl font-medium text-black sm:text-3xl";

export default function About() {
  return (
    <div className="flex-1 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl space-y-8">

        {/* Tentang Proyek */}
        <section>
          <h2 className={heading}>Tentang Proyek</h2>
          <div className={card}>
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
              <div className="size-40 shrink-0 overflow-hidden rounded-full bg-yellow-200 sm:size-52 md:size-64">
                <Image
                  src={assets.pakbagus}
                  alt="Pak Bagus"
                  width={256}
                  height={256}
                  sizes="(min-width: 768px) 256px, 208px"
                  className="size-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1 text-black">
                <p className="text-justify">
                  Proyek ini menggabungkan dashboard interaktif dan model prediksi <i>machine learning</i> agar terintegrasi secara <i>real-time </i>
                  dengan data terbaru yang diinput.
                </p>
                <p className="mt-4 text-justify">
                  Di bawah bimbingan dan arahan <b>Bapak Bagus Yuliono</b> sebagai Senior Manager Divisi Safety, proyek ini dikerjakan dengan
                  berkolaborasi dengan Departemen Statistika ITS oleh
                  <a href="https://www.linkedin.com/in/alifmuhmahrus/" target="_blank" rel="noopener noreferrer"> Mahrus Alif </a>
                  dan <a href="https://www.linkedin.com/in/mahastuti/" target="_blank" rel="noopener noreferrer">Nalini Mahastuti</a>.
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-10">
                  <div>
                    <h3 className="mb-2 font-medium">Tech Stack &amp; Tools:</h3>
                    <ul className="list-inside list-disc">
                      <li>Next.js</li>
                      <li>PostgreSQL &amp; Prisma</li>
                      <li>Supabase &amp; TablePlus</li>
                      <li>Python &amp; Flask</li>
                      <li>Github &amp; Vercel</li>
                      <li>Google Looker Studio</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium">Fitur Utama:</h3>
                    <ul className="list-inside list-disc">
                      <li>Input data terintegrasi</li>
                      <li>Dashboard real-time</li>
                      <li>Visualisasi interaktif</li>
                      <li>Model prediksi bird strike</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Saran Pengembangan + Versi */}
        <div className="grid gap-6 md:grid-cols-3">
          <section className="md:col-span-2">
            <h2 className={heading}>Saran Pengembangan</h2>
            <div className={`${card} h-[calc(100%-3.25rem)] text-black`}>
              <p className="mb-3">Proyek ini masih berada pada tahap pengembangan awal. Kedepannya, diharapkan dapat terus dikembangkan, dengan evaluasi:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Data burung terbatas, sehingga model juga didasarkan pada burung2 itu </li>
                <li>Data cuaca belum mendapat akses langsung dari BMKG Juanda, sehingga menggunakan data cuaca yang open-API </li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className={heading}>Versi</h2>
            <div className={`${card} h-[calc(100%-3.25rem)] text-gray-500`}>
              1.0.0 Rilis awal<br />
              1.1.0 &nbsp;Integrasi Database
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
