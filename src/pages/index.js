import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is a place to remember what you know.</h1>
    <p>The concepts contained within these pages have been conquered by you once before.</p>
    <p>There's not a question of you doing it again.</p>
    <p>Now go build something great.</p>
    <ul>
      <li><Link to="/1-building-blocks/">1 - Building Blocks</Link></li>
      <li><Link to="/2-styling/">2 - Styling</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
