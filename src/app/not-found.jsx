import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-4xl font-bold text-[#1c1d1f] mb-4">404 - Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Button asChild className="bg-[#5624d0] text-white hover:bg-[#3e1fa8]">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </main>
      <Footer />
    </div>
  )
}