import React from "react"
import "./style/index.scss"
import Oppertunities from "../Common/opportunities"

const servicesData = [
  {
    title: "React",
    heading: "React Development",
    para: "We create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.",
  },
  {
    title: "Wordpress",
    heading: "Wordpress Development",
    para: "We create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.",
  },
  {
    title: "Angular",
    heading: "Angular Development",
    para: "We create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.",
  },
  {
    title: "Node.js",
    heading: "Node.js Development",
    para: "We create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.",
  },
  {
    title: "PHP",
    heading: "PHP Development",
    para: "We create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.",
  },
  {
    title: "UI/UX",
    heading: "UI/UX Development",
    para: "We create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.",
  },
]

const Index = () => {
  return (
    <div className="main-services">
      <div className="services-container">
        <h1 className="services-hd">
          Services that&nbsp;
          <span className="hd-color">meet</span>
          <br />
          &nbsp;your need
        </h1>
        <p className="services-para">
          Experience deep knowledge of your industry paired with service
          specialization to bring you high quality digital services.
        </p>
      </div>
      <div className="main_services_cards">
        {servicesData.map((item, index) => (
          <div key={index} className="service_card">
            <span className="react">{item.title}</span>
            <h5 className="service_heading service_headingtwo service_headingthree">
              {item.heading}
            </h5>
            <p className="service_para">{item.para}</p>
          </div>
        ))}
      </div>
      <Oppertunities />
    </div>
  )
}

export default Index
