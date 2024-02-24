import { VanyaHeader } from './components/VanyaHeader';


export default function Home() {
  return (
    <main className='min-h-screen w-full'>
      <VanyaHeader />

      <section className='flex justify-center py-16'>
        <div className="w-11/12 md:w-9/12 border-2 border-gray-400 rounded-xl aspect-video bg-gray-100 text-center flex items-center justify-center">Demo Here</div>
      </section>
    </main>
  )
}
