import { Link } from "gatsby"
import React from "react"
import "./style/digitalfuture.scss"

const Digitalfuture = ({ data }) => {
  return (
    <>
      <div id="scroll-down" className="digital-future">
        <h1 className="digital-hd">
          {data.frontmatter.headingone?.slice(0, 30)}
          <span className="hd-fcolor">
            {data.frontmatter.headingone?.slice(30)}
          </span>
        </h1>
        <p className="digital-para">{data.frontmatter.description}</p>
      </div>
    </>
  )
}

export default Digitalfuture
