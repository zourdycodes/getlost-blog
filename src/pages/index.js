import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"
import Featured from "../components/featured"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Nav />
    <Featured />
  </Layout>
)

export default IndexPage
