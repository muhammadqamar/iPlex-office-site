import React from "react"
import "./style/card.scss"
import pic from "../../assets/images/au-4.jpg"
import { useStaticQuery, graphql } from "gatsby"

const Card = () => {
  // const  = useStaticQuery(graphql`
  //   query fateeData {
  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           templateKey
  //           description
  //           headingone
  //           headingtwo
  //           intro_cards {
  //             Cards {
  //               teamsImges
  //               carddescription
  //               cardheading
  //               cardnumber
  //             }
  //           }
  //           opportunitieslink {
  //             link
  //             linkname
  //           }
  //           headerlink {
  //             link
  //             linkname
  //           }
  //           heading
  //           descriptions
  //           heading1
  //           digitallink {
  //             link
  //             linkname
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
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
