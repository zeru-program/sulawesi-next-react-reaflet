import dynamic from 'next/dynamic';

// Lakukan dynamic import pada komponen Map agar dirender di sisi klien
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <Map />
    </main>
  );
}

