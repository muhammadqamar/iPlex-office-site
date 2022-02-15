import * as React from "react"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Seo from "../components/layout/seo"
import HomePage from "../components/Home"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
