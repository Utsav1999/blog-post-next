import Image from 'next/image'
import Banner from '../src/components/banner/banner'
import Posts from '@/src/components/post-listings/post-list'

const apiUrl = process.env['POST_SOURCE_API'] as string;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-black">
      <Banner />
      <Posts apiUrl={apiUrl}/>
    </main>
  )
}
