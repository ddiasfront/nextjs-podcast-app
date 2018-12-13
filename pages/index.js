import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Title, Text} from '../components/atoms/TextTitle';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <Title textType="H1">Qualquer coisa</Title>
    <Title textType="p">Qualquer coisa</Title>
    <Title textType="span">Qualquer coisa</Title>
  </Layout>
)

// Index.getInitialProps = async function () {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

export default Index