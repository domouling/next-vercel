import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
      <>
        <h1>About Page</h1>
        <div className={'description'}>
          <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.tsx</code>
          </p>
          
        </div>
      </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
