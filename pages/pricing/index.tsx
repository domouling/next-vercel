import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function PrincingPage() {
  return (
    <MainLayout>
      <>
        <h1>Pricing Page</h1>
        <div className={'description'}>
          <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/pricing.tsx</code>
          </p>
          
        </div>
      </>
    </MainLayout>
  )
}