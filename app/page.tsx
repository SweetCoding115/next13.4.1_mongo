'use client'
import { BsPostcardHeart } from 'react-icons/bs';

import Link from 'next/link'
import Header from 'components/Header'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Header>Next.js with TypeScript and MongoDB</Header>
      <div className="px-2 py-6">
        <Link href='/posts' className='btn glass text-black dark:text-white gap-2 dark:hover:btn-danger'>
          <BsPostcardHeart /> Posts
        </Link>
      </div>
    </div>
  )
}
