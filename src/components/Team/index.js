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
            teamheading
            team_cards {
              cards {
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
  const teamcards = nodes.filter(
    data => data.frontmatter.templateKey === "teamdata"
  )?.[0]
  console.log("teams cards data", teamcards)

  return (
    <div>
      <Mainpage datacard={teamcards} />
    </div>
  )
}

export default Index
