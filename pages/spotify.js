import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'

class Page extends React.Component {


  render() {

    const Content = () => (
      <div>
        <h1>NextJS Spotify API</h1>
        <p>This is a simple app build with the Next.JS framework and Spotify Dev API</p>
      </div>
    )

    return (
     <Content/>
    )
  }
}

export default withRouter(Page)