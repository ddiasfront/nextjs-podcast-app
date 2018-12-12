import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <ul>
      {
        props.shows.map(({ show }) => 
          <li key={show.id}>
            <a>{show.name}</a>
        </li>
        )
      }
    </ul>
    <PostLink id="hello-nextjs" title="Hello Next.js" />
    <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
    <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index