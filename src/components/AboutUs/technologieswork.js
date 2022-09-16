import React from "react"
import "./style/technologieswork.scss"
import Slider from "react-slick"

const TechnologiesWork = ({ data }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    speed: 1000,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="main_technology">
      <h1 className="technology_heading">
        {data?.frontmatter.technologies.maintechnologyheading.slice(0, 16)}
        <span className="hd_color">
          {data?.frontmatter.technologies.maintechnologyheading.slice(16, 20)}
        </span>
        {data?.frontmatter.technologies.maintechnologyheading.slice(20)}
      </h1>
      <div className="technology_bx">
        <Slider {...settings}>
          {data?.frontmatter.technologies.technologycards.map((item, index) => (
            <div key={index} className="card1">
              <div className="card-detail">
                <h5 className="card-hd">{item.cardtitle}</h5>
                <p className="card-para">{item.carddescription}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TechnologiesWork
