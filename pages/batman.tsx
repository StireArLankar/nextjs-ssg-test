import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { NextPage, GetStaticProps } from 'next'

interface Show {
  id: string
  name: string
}

interface Props {
  shows: Show[]
}

const Index: NextPage<Props> = (props) => (
  <>
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
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = (await res.json()) as Array<{ show: Show }>

  // Pass post data to the page via props
  return { props: { shows: data.map((entry) => entry.show) } }
}

export default Index
