import React from "react"
import "./style/ourServiceWorker.scss"

import Slider from "react-slick"
import logo from "../../assets/images/left-quote.svg"
import logo2 from "../../assets/images/quote.svg"

const serviceSlider = [
  {
    quotelogo: logo,
    text: "Lorem Ipsum is simply dummy text of the printing and pesetting to industry. Lorem Ipsum has been the industry's standard dummy tet ever since they 1500s,",
    subheading: "Mark Lee | CEO, ABC Design",
  },
  {
    quotelogo: logo2,
    text: "Lorem Ipsum is simply dummy text of the printing and pesetting to industry. Lorem Ipsum has been the industry's standard dummy tet ever since they 1500s,",
    subheading: "Mard Devid | Aricell Developer",
  },
  {
    quotelogo: logo,
    text: "Lorem Ipsum is simply dummy text of the printing and pesetting to industry. Lorem Ipsum has been the industry's standard dummy tet ever since they 1500s,",
    subheading: "Mark Lee | CEO, ABC Design",
  },
  {
    quotelogo: logo2,
    text: "Lorem Ipsum is simply dummy text of the printing and pesetting to industry. Lorem Ipsum has been the industry's standard dummy tet ever since they 1500s,",
    subheading: "Mard Devid | Aricell Developer",
  },
  {
    quotelogo: logo,
    text: "Lorem Ipsum is simply dummy text of the printing and pesetting to industry. Lorem Ipsum has been the industry's standard dummy tet ever since they 1500s,",
    subheading: "Mark Lee | CEO, ABC Design",
  },
  {
    quotelogo: logo2,
    text: "Lorem Ipsum is simply dummy text of the printing and pesetting to industry. Lorem Ipsum has been the industry's standard dummy tet ever since they 1500s,",
    subheading: "Mard Devid | Aricell Developer",
  },
]

const OurServiceWorker = () => {
  const slidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    className: "center",
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

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
    <div className="service_main">
      <div className="overlay"></div>
      <Slider {...slidersettings}>
        {serviceSlider.map((item, index) => (
          <div key={index} className="service_cards">
            <div className="service_info">
              <div className="service_logo">
                <img className="logo" src={item.quotelogo} alt="quote logo" />
              </div>
              <div className="service_content">
                <p className="service_para">{item.text}</p>
                <h5 className="content_heading">{item.subheading}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default OurServiceWorker
