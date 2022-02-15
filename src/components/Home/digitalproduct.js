import React from "react"
import DiscoverCard from "./discoverCard"
import "./style/digitalproduct.scss"
import Slider from "react-slick"

const Digitalproduct = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
    speed: 1000,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <div>
      <div className="digital-product">
        <h1 className="product-hd">
          Feed designs and builds ambitious digital products and brands
        </h1>
        <p className="product-para">
          <a className="product-link" href="https://iplex.co/services/">
            Discover your focus
          </a>
        </p>
      </div>
      <div className="main-card-box">
        <Slider {...settings}>
          <DiscoverCard />
          <DiscoverCard />
          <DiscoverCard />
          <DiscoverCard />
          <DiscoverCard />
          <DiscoverCard />
        </Slider>
      </div>
    </div>
  )
}

export default Digitalproduct
