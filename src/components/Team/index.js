import React from "react"
import "./style/index.scss"
import Mainpage from "./mainpage"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"

const Index = () => {
  const teamData = useStaticQuery(graphql`
    query tData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            templateKey
            opportunitieslink {
              link
              linkname
            }
            title
            teamheading
            team_cards {
              Cards {
                cardimage
                cardheading
                carddescription
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
    data => data.frontmatter.templateKey === "myteamnew"
  )?.[0]
  console.log("cards data koi b", team_cards)

  return (
    <div>
      <Mainpage data={opportunities} tdata={team_cards} />
    </div>
  )
}

export default Index
