import React from "react"
import "./style/index.scss"
import Herosection from "./herosection"
import Digitalfuture from "./digitalfuture"
import Digitalproduct from "./digitalproduct"
import Opportunities from "../Common/opportunities"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const digitalData = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            templateKey
            hero {
              heading
              description
              headerLink {
                linkName
                linkUrl
              }
            }
            digitalFuture {
              headingone
              headingtwo
              descriptions
              digitallink {
                link
                linkname
                introCards {
                  cards {
                    cardDescription
                    cardNumber
                    cardheading
                  }
                }
              }
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
    data => data.frontmatter.templateKey === "home"
  )?.[0]
  return (
    <>
      <div className="top-home-hero-section">
        <Herosection data={digital} />
      </div>
      <div className="main-home-page">
        <div className="all-sections">
          <Digitalfuture data={digital} />
          <Digitalproduct data={digital} />
          <Opportunities />
        </div>
      </div>
    </>
  )
}

export default Index
