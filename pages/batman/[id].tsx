import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'

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

const Post: NextPage<Props> = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
)

Post.getInitialProps = async ({ query }) => {
  const { id } = query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = (await res.json()) as Show

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
