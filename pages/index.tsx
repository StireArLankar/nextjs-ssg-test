import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { FC } from 'react'

const PostLink: FC<{ title: string }> = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const PostLink2: FC<{ id: string }> = ({ id }) => (
  <li>
    <Link href='/post/[id]' as={`/post/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
)

export default () => {
  return (
    <Layout>
      <div className='container'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
          <h1 className='title'>
            Welcome to <a href='https://nextjs.org'>Next.js!</a>
          </h1>

          <ul>
            <PostLink title='Hello Next.js' />
            <PostLink title='Learn Next.js is awesome' />
            <PostLink title='Deploy apps with Zeit' />
          </ul>

          <ul>
            <PostLink2 id='hello-nextjs' />
            <PostLink2 id='learn-nextjs' />
            <PostLink2 id='deploy-nextjs' />
          </ul>
        </main>

        <footer>
          <a
            href='https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by <img src='/zeit.svg' alt='ZEIT Logo' />
          </a>
        </footer>
      </div>
    </Layout>
  )
}
