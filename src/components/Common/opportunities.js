import React from "react"
import "./style/opportunities.scss"
import { useStaticQuery, graphql } from "gatsby"
const Opportunities = () => {
  const opportunitiesData = useStaticQuery(graphql`
    query opportunities {
      allMarkdownRemark {
        nodes {
          frontmatter {
            templateKey
            youropportunities {
              heading
              description
              opportunitiesLink {
                link
                linkName
              }
            }
          }
        }
      }
    }
  `)
  const {
    allMarkdownRemark: { nodes },
  } = opportunitiesData
  const opportunities = nodes.filter(
    data => data.frontmatter.templateKey === "home"
  )?.[0]
  console.log("oppertunities data here", opportunities)
  return (
    <>
      <div className="main-opportunities">
        <div className="opportunities-container">
          <h1 className="oppertunities-hd">
            {opportunities.frontmatter.youropportunities.heading.slice(0, 36)}
            <span className="hd-color">
              {opportunities.frontmatter.youropportunities.heading.slice(
                36,
                49
              )}
            </span>
            {opportunities.frontmatter.youropportunities.heading.slice(49)}
          </h1>
          <p className="oppertunities-para">
            {opportunities.frontmatter.youropportunities.description}
          </p>
          <p className="link-para">
            <a
              className="oppertunities-link"
              href={
                opportunities.frontmatter.youropportunities.opportunitiesLink
                  .link
              }
            >
              {
                opportunities.frontmatter.youropportunities.opportunitiesLink
                  .linkName
              }
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Opportunities
