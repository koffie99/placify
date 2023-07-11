import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Places from '@/components/Places'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1f1f1] justify-between">
      <Navbar />
      <Places />
    </main>
  )
}
