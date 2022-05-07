import React from "react"
import "./style/index.scss"
import Mainpage from "./mainpage"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const teamData = useStaticQuery(graphql`
    query tData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            opportunitieslink {
              link
              linkname
            }
            heading
            team_cards {
              Cards {
                cardheading
                carddescription
                teamsImges
              }
            }
          }
        }
      }
    }
  `)
  const {
    allMarkdownRemark: { nodes },
  } = teamData

  const opportunities = nodes.filter(
    data => data.frontmatter.templateKey === "opportunities"
  )?.[0]
  console.log("oppertu data", opportunities)
  const team_cards = nodes.filter(
    data => data.frontmatter.templateKey === "myteam"
  )?.[0]
  console.log("cards data", team_cards)

  return (
    <div>
      <Mainpage data={opportunities} />
    </div>
  )
}

export default Index
