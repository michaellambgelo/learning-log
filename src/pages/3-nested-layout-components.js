import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NestedLayoutComponentsPage = () => (
	<Layout>
        <SEO title="Nested Layout Components"></SEO>
        <h1>Nested Layout Components</h1>
		<p>In <Link to="https://www.gatsbyjs.org/tutorial/part-three/">this section</Link> I:</p>
		<ul>
			<li>learned about using Gatsby plugins</li>
			<li>learned about creating layout components</li>
		</ul>
		<p><Link to="/">Home</Link></p>
	</Layout>
)

export default NestedLayoutComponentsPage