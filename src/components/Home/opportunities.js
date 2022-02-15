import React from "react"
import "./style/opportunities.scss"

const Opportunities = () => {
  return (
    <>
      <div className="main-opportunities">
        <div className="opportunities-container">
          <h1 className="oppertunities-hd">
            Want to know immediately where your{" "}
            <span className="hd-color">opportunities</span> lie?
          </h1>
          <p className="oppertunities-para">
            In the intake we tell you all the ins and outs of our approach,
            opportunities for your brand and success stories from previous
            projects. Everyone is welcome. Step inside. It can just change your
            life.
          </p>
          <p className="link-para">
            <a
              className="oppertunities-link"
              href="https://iplex.co/contact-us/"
            >
              {" "}
              Get in touch{" "}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Opportunities
