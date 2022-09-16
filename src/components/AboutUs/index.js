import React from "react"
import "./style/index.scss"
import TechnologiesWork from "./technologiesWork"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const aboutdata = useStaticQuery(graphql`
    query aData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            templateKey
            aboutmainheading
            aboutImages {
              aboutusimage
            }
            brandheading
            brandparagraph
            brandimage
            subaboutheading
            subaboutparagraph
            technologies {
              maintechnologyheading
              technologycards {
                cardtitle
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
  } = aboutdata
  const technologydata = nodes.filter(
    data => data.frontmatter.templateKey === "aboutdata"
  )?.[0]
  console.log("technology cards data", technologydata)

  return (
    <div className="main_about">
      <div className="main_section">
        <div className="main_container">
          <h1 className="about_heading">
            {technologydata?.frontmatter.aboutmainheading.slice(0, 15)}
            <span className="hd_color">
              {technologydata?.frontmatter.aboutmainheading.slice(15, 23)}
            </span>
            {technologydata?.frontmatter.aboutmainheading.slice(23)}
          </h1>
        </div>
        <div className="about_category">
          {technologydata?.frontmatter.aboutImages.map((item, index) => (
            <div
              key={index}
              className={index === 1 ? " img_bx img_bx2" : "img_bx"}
            >
              <img className="about_person" src={item.aboutusimage} />
            </div>
          ))}
        </div>
        <div className="about_brand_category">
          <h4 className="brand_heading">
            {technologydata?.frontmatter.brandheading}
          </h4>
          <div>
            <p className="brand_para">
              {technologydata?.frontmatter.brandparagraph.slice(0, 197)}
            </p>
            <p className="brand_para">
              {technologydata?.frontmatter.brandparagraph.slice(197)}
            </p>
          </div>
        </div>
        <div className="about_us">
          <div className="img_bx img_bx2">
            <img
              className="about_person"
              src={technologydata?.frontmatter.brandimage}
            />
          </div>
          <div className="about_us_rightsection">
            <h4 className="about_us_heading">
              {technologydata?.frontmatter.subaboutheading}
            </h4>
            <div>
              <p className="about_us_para">
                {technologydata?.frontmatter.subaboutparagraph.slice(0, 109)}
              </p>
              <p className="about_us_para">
                {technologydata?.frontmatter.subaboutparagraph.slice(109)}
              </p>
            </div>
          </div>
        </div>
        <TechnologiesWork data={technologydata} />
      </div>
    </div>
  )
}

export default Index
