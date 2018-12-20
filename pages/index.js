import {Layout} from '../components'
import fetch from 'isomorphic-unfetch';
import  {TextComponent} from '../components';
import  {LinkComponent} from '../components';
import Router from 'next/router'

const Index = (props) => (
  <Layout>
    <LinkComponent nextRouter={Router} href="/about">Link next como componente</LinkComponent>
    <TextComponent textType="H1" textColor="yellow" textSize="18px">Qualquer coisa</TextComponent>
    <TextComponent textType="p" textColor="red" textSize="14px">Qualquer coisa</TextComponent>
    <TextComponent textType="span" textColor="grey" textSize="12px">Qualquer coisa</TextComponent>
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