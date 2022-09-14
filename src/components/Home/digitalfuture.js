import React from "react"
import "./style/digitalfuture.scss"

const Digitalfuture = ({ data }) => {
  return (
    <>
      <div id="scroll-down" className="digital-future">
        <h1 className="digital-hd">
          {data.frontmatter.digitalFuture.headingone?.slice(0, 22)}
          <span className="hd-fcolor">
            {data.frontmatter.digitalFuture.headingone?.slice(22, 29)}
          </span>
          {data.frontmatter.digitalFuture.headingone?.slice(29)}
        </h1>
        <p className="digital-para">
          {data.frontmatter.digitalFuture.descriptions}
        </p>
        <h1 className="digital-hd sub_heading">
          {data.frontmatter.digitalFuture.headingtwo}
        </h1>
        <p className="product-para">
          <a
            className="product-link"
            href={data.frontmatter.digitalFuture.digitallink.link}
          >
            {data.frontmatter.digitalFuture.digitallink.linkname}
          </a>
        </p>
      </div>
    </>
  )
}

export default Digitalfuture
