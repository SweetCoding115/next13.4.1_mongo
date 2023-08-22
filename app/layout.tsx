import { FetchConfig } from 'http-react'
import Providers from './providers'
import './globals.css'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <FetchConfig baseUrl='/api'>
      <html>
        <head>
          <title>Next.js starter</title>
          <meta name='description' content='A Starter with Next.js' />
        </head>
        <body>
          <Providers>
            <div className='h-full dark:text-white dark:bg-gray-800'>{children}</div>
            <Link
              href='https://github.com/SweetCoding115/next13.4.1_mongo'
              target='_blank'
              className='fixed bottom-2 left-2 btn btn-sm gap-x-2'
            >
              <BsGithub /><span>Github</span>
            </Link>
          </Providers>
        </body>
      </html>
    </FetchConfig>
  )
}

export default MainLayout
