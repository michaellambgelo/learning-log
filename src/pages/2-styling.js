import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StylingPage = () => (
	<Layout>
		<SEO title="Styling"></SEO>
		<h1>Styling</h1>
		<p>In <Link to="https://www.gatsbyjs.org/tutorial/part-two/">this section</Link> I:</p>
		<ul>
			<li>learned about using global styles</li>
			<li>learned about creating global styles with standard CSS files</li>
			<li>learned about using component-scoped CSS</li>
			<li>learned about <Link to="/about-css-modules/">styling using CSS modules</Link></li>
			<li>learned about styling using CSS-in-JS</li>
		</ul>
		<p><Link to="/">Home</Link></p>
	</Layout>
)

export default StylingPage