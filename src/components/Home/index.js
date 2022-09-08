import React from "react"
import "./style/index.scss"
import Herosection from "./herosection"
import Digitalfuture from "./digitalfuture"
import Digitalproduct from "./digitalproduct"
import Opportunities from "./opportunities"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const digitalData = useStaticQuery(graphql`
    query digiData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            templateKey
            description
            headingone
            headingtwo
            intro_cards {
              Cards {
                carddescription
                cardheading
                cardnumber
              }
            }
            opportunitieslink {
              link
              linkname
            }
            headerlink {
              link
              linkname
            }
            heading
            descriptions
            heading1
            digitallink {
              link
              linkname
            }
          }
        }
      }
    }
  `)
  const {
    allMarkdownRemark: { nodes },
  } = digitalData

  const digital = nodes.filter(
    data => data.frontmatter.templateKey === "digitalfuture"
  )?.[0]
  console.log("digital data oppor", digital)
  const headingData = nodes.filter(
    data => data.frontmatter.templateKey === "top-header"
  )?.[0]

  const opportunities = nodes.filter(
    data => data.frontmatter.templateKey === "opportunities"
  )?.[0]

  const digitalProduct = nodes.filter(
    data => data.frontmatter.templateKey === "digitalfuture"
  )?.[0]
  console.log("data oppor", digitalProduct)

  return (
    <>
      <div className="top-home-hero-section">
        <Herosection data={headingData} />
      </div>

      <div className="main-home-page">
        <div className="all-sections">
          <Digitalfuture data={digital} />
          <Digitalproduct data={digitalProduct} />
          <Opportunities data={opportunities} />
        </div>
      </div>
    </>
  )
}

export default Index
