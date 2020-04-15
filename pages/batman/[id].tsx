import fetch from 'isomorphic-unfetch'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Show {
  name: string
  summary: string
  image?: {
    medium: string
  }
}

interface Props {
  show: Show
}

const Post: NextPage<Props> = (props) => {
  return (
    <>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const posts = await res.json()

  const paths = posts.map((entry) => `/batman/${entry.show.id}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`)
  const show = await res.json()

  return { props: { show } }
}

export default Post
