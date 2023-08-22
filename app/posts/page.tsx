'use client'
import Link from 'next/link'
import useFetch, { revalidate } from 'http-react'

import { IPost } from 'src/Models/Post'
import Header from 'components/Header'

function confirmPostDelete(id: any) {
  const confirmation = confirm('Do you want to remove this post?')
  if (confirmation) {
    revalidate(id)
  }
}

function Post(props: Partial<IPost>) {
  const fetchID = {
    post: props
  }

  useFetch('/posts', {
    id: fetchID,
    method: 'DELETE',
    query: {
      id: props._id
    },
    onResolve() {
      revalidate('GET /posts')
    }
  })

  return (
    <div
      style={{
        transition: '0.12s'
      }}
      className='card p-4 relative break-words rounded-lg hover:border-neutral-400 card-bordered m-4'
      key={`post-${props._id}`}
    >
      <button
        className='btn btn-ghost font-semibold absolute top-1 right-1 cursor-pointer'
        onClick={() => confirmPostDelete(fetchID)}
      >
        Delete
      </button>
      <b className='my-2'>{props.title}</b>
      <br />
      <p className='my-4'>{props.content}</p>
    </div>
  )
}

export default function Posts() {
  const { data, loadingFirst, error } = useFetch<IPost[]>('/posts', {
    default: []
  })

  if (loadingFirst)
    return <p className='text-2xl font-semibold py-4'>Loading posts...</p>

  if (error)
    return <p className='text-2xl text-red-400 py-4'>Failed to fetch posts</p>

  return (
    <div>
      <Header>Your posts ({data.length})</Header>
      <div className='flex space-x-4 px-2 py-6'>
        <Link href='/' className='btn gap-x-2 btn-ghost'>
          Back
        </Link>
        <Link href='/posts/create' className='btn gap-x-2'>
          Add one post
        </Link>
      </div>
      <div className='py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 rounded-md'>
        {data.map(post => (
          <Post {...post} key={`post-${post._id}`} />
        ))}
      </div>
    </div>
  )
}
