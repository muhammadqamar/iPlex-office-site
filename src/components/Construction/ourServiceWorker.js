import React from "react"
import "./style/ourServiceWorker.scss"

import Slider from "react-slick"
import logo from "../../assets/images/left-quote.svg"
import logo2 from "../../assets/images/quote.svg"

const serviceSlider = [
  {
    quotelogo: logo,
    text: "Lorem Ipsum is simply dummy text of the printing and pesetting to industry. Lorem Ipsum has been the industry's standard dummy tet ever since they 1500s,",
    subheading: "Mark Lee | CEO, ABC Design 1 : One",
  },
  {
    quotelogo: logo2,
    text: "Lorem Ipsum is simply dummy text of the printing and pesetting to industry. Lorem Ipsum has been the industry's standard dummy tet ever since they 1500s,",
    subheading: "Mard Devid | Aricell Developer 2 : Two",
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
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1000,

    responsive: [
      {
        breakpoint: 700,
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
            <div
              className={
                (index === 1 && "service_info second_info") ||
                "service_info first_info"
              }
            >
              <div className="service_logo">
                <img
                  className={
                    (index === 0 && "logo quote") || "logo second_quote"
                  }
                  src={item.quotelogo}
                  alt="quote logo"
                />
              </div>
              <div
                className={
                  (index === 0 && "service_content first_content") ||
                  "service_content second_content"
                }
              >
                <p className="service_para">{item.text}</p>
                <h5 className="service_heading">{item.subheading}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default OurServiceWorker
