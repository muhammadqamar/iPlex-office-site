import React from "react"
import "./style/processfollow.scss"
import Accordion from "react-bootstrap/Accordion"

import userlogo from "../../assets/images/process_left_logo.png"
import numlogo1 from "../../assets/images/accordian_num1.png"
import numlogo2 from "../../assets/images/accordian_num2.png"
import numlogo3 from "../../assets/images/accordian_num3.png"
import numlogo4 from "../../assets/images/accordian_num4.png"
import accordianlogo1 from "../../assets/images/accordian_logo1.png"
import accordianlogo2 from "../../assets/images/accordian_logo2.png"
import accordianlogo3 from "../../assets/images/accordian_logo3.png"
import accordianlogo4 from "../../assets/images/accordian_logo4.png"

const accordianData = [
  {
    accordimg: numlogo1,
    accordheading: "Project Initiation",
    accordinnerimg: accordianlogo1,
    accordpara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod fore to tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
  },
  {
    accordimg: numlogo2,
    accordheading: "Achitect Selection",
    accordinnerimg: accordianlogo2,
    accordpara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod fore to tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
  },
  {
    accordimg: numlogo3,
    accordheading: "Builing Programs",
    accordinnerimg: accordianlogo3,
    accordpara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod fore to tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
  },
  {
    accordimg: numlogo4,
    accordheading: "Finalize Construction",
    accordinnerimg: accordianlogo4,
    accordpara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod fore to tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
  },
]

const Processfollow = () => {
  return (
    <div className="process_banner">
      <div className="overlay"></div>
      <div className="process_container">
        <div className="process_image">
          <img className="left_logo" src={userlogo} alt="user logo" />
        </div>
        <div className="process_accordian">
          <div className="process_info">
            <h1 className="process_heading">PROCESS WE FOLLOW</h1>
            <h2 className="process_subheading">WE SATISFY OUR CLIENTS</h2>
          </div>
          {accordianData.map((item, index) => (
            <Accordion defaultActiveKey={0} alwaysOpen>
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>
                  <img
                    className="num_logo"
                    src={item.accordimg}
                    alt="number logo"
                  />
                  <a
                    style={{
                      padding:
                        (index === 0 && "0 0 0 20px") ||
                        (index === 2 && "0 8px 0 0") ||
                        (index === 3 && "0 0 0 21px") ||
                        "",
                    }}
                  >
                    {item.accordheading}
                  </a>

                  <img
                    className="accord_logo"
                    src={item.accordinnerimg}
                    alt="accordian logo"
                  />
                </Accordion.Header>
                <Accordion.Body>{item.accordpara}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Processfollow
