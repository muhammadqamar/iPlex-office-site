import React from "react"
import "./style/creativeArchitechture.scss"

import Slider from "react-slick"
import vintagelogoOne from "../../assets/images/slider_card_logoOne.png"
import vintagelogoTwo from "../../assets/images/slider_card_logoTwo.png"
import vintagelogoThree from "../../assets/images/slider_card_logoThree.png"
import vintagelogoFour from "../../assets/images/slider_card_logoFour.png"
import vintagelogoFive from "../../assets/images/slider_card_logoFive.png"
import vintagelogoSix from "../../assets/images/slider_card_logoOne.png"
import vintagelogoSeven from "../../assets/images/slider_card_logoTwo.png"
import vintagelogoEight from "../../assets/images/slider_card_logoThree.png"
import vintagelogoNine from "../../assets/images/slider_card_logoFour.png"
import vintagelogoTen from "../../assets/images/slider_card_logoFive.png"
import Rightarrow from "../../assets/images/right_arrow.png"

const sliderLogos = [
  {
    creativelogo: vintagelogoOne,
  },
  {
    creativelogo: vintagelogoTwo,
  },
  {
    creativelogo: vintagelogoThree,
  },
  {
    creativelogo: vintagelogoFour,
  },
  {
    creativelogo: vintagelogoFive,
  },
  {
    creativelogo: vintagelogoSix,
  },
  {
    creativelogo: vintagelogoSeven,
  },
  {
    creativelogo: vintagelogoEight,
  },
  {
    creativelogo: vintagelogoNine,
  },
  {
    creativelogo: vintagelogoTen,
  },
]

const CreativeArchitechture = () => {
  const slidersettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    className: "center",
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="creative_section">
      <div className="creative_main">
        <div className="overlay"></div>
        <Slider {...slidersettings}>
          {sliderLogos.map((item, index) => (
            <div key={index} className="card_section">
              <div className="card_logos">
                <img className="logo" src={item.creativelogo} alt="logo" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="creative_content">
        <div className="content_bx">
          <div className="content_info">
            <h3 className="content_heading">
              CREATIVE & UNIQUE ARCHITECTURE BUILDING AGENCY TEMPLATE
            </h3>
            <p className="content_para">
              Mistiri can be used for any type of construction website. complete
              package of mistiri. we hope that you will enjoy mistiri
            </p>
          </div>
          <a className="secondary_custom_button creative_secondary_btn">
            purchase now
            <div className="img_bx" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CreativeArchitechture
