import React from "react"
import "./style/index.scss"
import aboutImg from "../../assets/images/group.jpg"
import TechnologiesWork from "./technologiesWork"

const Index = () => {
  return (
    <div className="main_about">
      <div className="main_container">
        <h1 className="about_heading">
          Let's tell the <span className="hd_color">stories</span> that matter
        </h1>
      </div>
      <div className="about_category">
        <div className="img_bx">
          <img className="about_person" src={aboutImg} />
        </div>
        <div className="img_bx img_bx2">
          <img className="about_person" src={aboutImg} />
        </div>
        <div className="img_bx">
          <img className="about_person" src={aboutImg} />
        </div>
      </div>
      <div className="about_brand_category">
        <h4 className="brand_heading">Building a brand new category</h4>
        <div>
          <p className="brand_para">
            We do much more than simply deliver technology or provide managed
            services. At iPlex, we offer clients the unique skill we’ve gained
            from our one-of-a-kind experience with our partners and clients
          </p>
          <p className="brand_para">
            Our solutions come from a process of perception, leading edge, and
            profound knowledge of various technologies.
          </p>
        </div>
      </div>
      <div className="about_us">
        <div className="img_bx img_bx2">
          <img className="about_person" src={aboutImg} />
        </div>
        <div className="about_us_rightsection">
          <h4 className="about_us_heading">About Us</h4>
          <div>
            <p className="about_us_para">
              Since our inception in 2009, we are growing into an organization
              that rivals any modern day software company.
            </p>
            <p className="about_us_para">
              Since our inception in 2009, we are growing into an organization
              that rivals any modern day software company.
            </p>
          </div>
        </div>
      </div>
      <TechnologiesWork />
    </div>
  )
}

export default Index
