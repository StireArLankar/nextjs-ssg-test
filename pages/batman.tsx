import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'

interface Show {
  id: string
  name: string
}

interface Props {
  shows: Show[]
}

const Index: NextPage<Props> = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link href='/batman/[id]' as={`/batman/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = (await res.json()) as Array<{ show: Show }>

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map((entry) => entry.show),
  }
}

export default Index
