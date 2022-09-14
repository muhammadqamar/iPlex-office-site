import React from "react"
import "./style/index.scss"
import Oppertunities from "../Common/opportunities"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const servicedata = useStaticQuery(graphql`
    query serviceData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            templateKey
            servicesmainheading
            servicesmainpara
            services_cards {
              cards {
                cardtitle
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
  } = servicedata
  const sericecards = nodes.filter(
    data => data.frontmatter.templateKey === "servicedata"
  )?.[0]
  console.log("services data is here", sericecards)
  return (
    <div className="main-services">
      <div className="services-container">
        <h1 className="services-hd">
          {sericecards?.frontmatter?.servicesmainheading.slice(0, 14)}
          <span className="hd-color">
            {sericecards?.frontmatter?.servicesmainheading.slice(14, 19)}
          </span>
          <br />
          {sericecards?.frontmatter?.servicesmainheading.slice(19)}
        </h1>
        <p className="services-para">
          {sericecards?.frontmatter?.servicesmainpara}
        </p>
      </div>
      <div className="main_services_cards">
        {sericecards?.frontmatter?.services_cards.cards.map((item, index) => (
          <div
            key={index}
            className={
              (index === 1 && " service_card service_headingone") ||
              (index === 2 && " service_card service_headingtwo") ||
              (index === 3 && " service_card service_headingthree") ||
              (index === 4 && " service_card service_headingfour") ||
              (index === 5 && " service_card service_headingfive") ||
              "service_card"
            }
          >
            <span className="react">{item.cardtitle}</span>
            <h5 className={"service_heading"}>{item.cardheading}</h5>
            <p className="service_para">{item.carddescription}</p>
          </div>
        ))}
      </div>
      <Oppertunities />
    </div>
  )
}

export default Index
