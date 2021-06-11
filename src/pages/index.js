import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"
import Home from "../components/home"
import Featured from "../components/featured/index"
import Footer from "../components/footer"
import { Link } from "gatsby"
import "./styles/index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog" className="viewmore">
      View More
    </Link>
    <Footer />
  </Layout>
)

export default IndexPage
