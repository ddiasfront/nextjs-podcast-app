import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'

class Page extends React.Component {


  render() {

    const Content = () => (
      <div>
        <h1>{this.props.router.query.title}</h1>
        <p>This is the blog post content.</p>
      </div>
    )

    return (
      <Layout>
        <Content />
      </Layout>
    )
  }
}

export default withRouter(Page)