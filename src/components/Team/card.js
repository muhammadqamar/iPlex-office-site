import React from "react"
import "./style/card.scss"
import pic from "../../assets/images/au-4.jpg"
import { useStaticQuery, graphql } from "gatsby"

const Card = () => {
  const teamData = useStaticQuery(graphql`
    query fateeData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            teamheading
            team_cards {
              Cards {
                cardheading
                carddescription
                cardimage
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
  console.log("team data is here", teamData)
  return (
    <>
      <div className="team-card">
        <div className="img-bx">
          <img className="img-person" src={pic}></img>
        </div>
        <div className="person-detail">
          <h1 className="person-hd">Haris Siddiqui</h1>
          <p className="person-pst">Creative Department</p>
        </div>
      </div>
    </>
  )
}

export default Card
