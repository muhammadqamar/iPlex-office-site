import React from "react"
import "./style/technologieswork.scss"
import Slider from "react-slick"

const technologiesData = [
  {
    head: "React Development",
    para: "We create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.",
  },
  {
    head: "Wordpress Development",
    para: "A WordPress developer is one who can make custom plugins and modules for WordPress. WordPress designer (a true one) is able to develop a theme around WordPress.",
  },
  {
    head: "Angular Development",
    para: "Angular JS has become one of the most popular JavaScript frameworks so far as it is easy to use, provides high simplification to the entire development process as well as supports the latest standards of JavaScript (ES6).",
  },
  {
    head: "Node.js Development",
    para: "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.",
  },
  {
    head: "PHP Development",
    para: "PHP scripts can be used on most of the well-known operating systems like Linux, Unix, Solaris, Microsoft Windows, MAC OS and many others. It also supports most web servers including Apache and IIS. Using PHP affords web developers the freedom to choose their operating system and web server.",
  },
  {
    head: "UI/UX Development",
    para: "We research, prototype, design, and test digital products, putting your customer in the center of the service, while creating a joyful and convenient experience.",
  },
]

const TechnologiesWork = () => {
  const settings = {
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
    <div className="main_technology">
      <h1 className="technology_heading">
        Technologies we <span className="hd_color">work</span> with
      </h1>
      <div className="technology_bx">
        <Slider {...settings}>
          {technologiesData.map((item, index) => (
            <div key={index} className="card1">
              <div className="card-detail">
                <h5 className="card-hd">{item.head}</h5>
                <p className="card-para">{item.para}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TechnologiesWork
