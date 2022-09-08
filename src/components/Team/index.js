import React from "react"
import "./style/index.scss"
import Mainpage from "./mainpage"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"

const Index = () => {
  // const teamData = useStaticQuery(graphql`
  //   query tData {
  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           templateKey
  //           opportunitieslink {
  //             link
  //             linkname
  //           }
  //           title
  //           teamheading
  //           team_cards {
  //             Cards {
  //               cardimage
  //               cardheading
  //               carddescription
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const {
  //   allMarkdownRemark: { nodes },
  // } = teamData

  // const opportunities = nodes.filter(
  //   data => data.frontmatter.templateKey === "opportunities"
  // )?.[0]
  // console.log("oppertu data", opportunities)
  // const teamcards = nodes.filter(
  //   data => data.frontmatter.templateKey === "myteamnew"
  // )?.[0]
  // console.log("cards data koi b", teamcards)

  return (
    <div>{/* <Mainpage data={opportunities} datacard={teamcards} /> */}</div>
  )
}

export default Index
