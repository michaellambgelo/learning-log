import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BuildingBlocksPage = () => (
	<Layout>
		<SEO title="Building Blocks"></SEO>
		<h1>Building Blocks</h1>
		<p>In <Link to="https://www.gatsbyjs.org/tutorial/part-one/">this section</Link> I:</p>
		<ul>
			<li>learned about Gatsby starters and how to use them to create new projects</li>
			<li>learned about JSX syntax</li>
			<li>learned about components</li>
			<li>learned about Gatsby page components and sub-components</li>
			<li>learned about Reacts "props" and reusing React components</li>
		</ul>
		<p><Link to="/">Home</Link></p>
	</Layout>
)

export default BuildingBlocksPage