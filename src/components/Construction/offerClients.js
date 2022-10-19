import React, { useState, useEffect } from "react"
import "./style/offerClients.scss"

import { Tab, Tabs } from "react-bootstrap"

import tablogo from "../../assets/images/tab_innerImg.jpg"
import searchlogo from "../../assets/images/search_glass_logo.svg"
import pencillogo from "../../assets/images/pencil_logo.svg"
import poniterlogo from "../../assets/images/hand_pointer_logo.svg"
import checklogo from "../../assets/images/check_logo.svg"

const tabtitle = [
  {
    title: "residential construction",
  },
  {
    title: "industrial construction",
  },
  {
    title: "home construction",
  },
  {
    title: "cargo construction",
  },
]

const iconLogos = [
  {
    logo: searchlogo,
    logoText: "Planning",
  },
  {
    logo: pencillogo,
    logoText: "Analysis",
  },
  {
    logo: poniterlogo,
    logoText: "Construction",
  },
  {
    logo: checklogo,
    logoText: "Launch",
  },
]

const OfferClients = () => {
  const [cardDetail, setcardDetail] = useState(0)

  const cardIconDetail = icon => {
    let detail
    switch (icon) {
      case "Planning":
        detail = "Planning details"
        break
      case "Analysis":
        detail = "Analysis details"
        break
      case "Construction":
        detail = "Construction details"
        break
      case "Launch":
        detail = "Launch details"
        break
      default:
        detail = "No details"
    }
    return detail
  }
  return (
    <div className="main_client">
      <div className="client_container">
        <div className="title_section">
          <h1 className="title_heading">OUR SERVICES</h1>
          <h2 className="title_subheading">WE OFFER OUR CLIENTS</h2>
        </div>
        <Tabs defaultActiveKey={0} id="justify-tab" className="mb-3" fill>
          {tabtitle.map((item, index) => (
            <Tab key={index} eventKey={index} title={item.title}>
              <div className="tab_content">
                <div class="tab_container">
                  <div class="tab_item">
                    <img className="tab_img" src={tablogo} alt="item logo" />
                  </div>
                  <div className="tab_info_content">
                    <h4 className="tab_heading">Construction</h4>
                    <p className="tab_para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm temporaty incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nost
                      exercitation ullamco laboris nisi ut aliqui off exo ea
                      commodo consequat. Duis too aute irure dolor in
                      reprehenderit. volupt velit esse cillum to the end.
                    </p>
                    <div className="icons_flx">
                      {iconLogos.map((item, index) => (
                        <div key={index} className="inner_icon_flx">
                          <div
                            className="icon_box"
                            onClick={() => setcardDetail(index)}
                          >
                            <img
                              className="icon_logo"
                              src={item.logo}
                              alt="icon logo"
                            />
                          </div>
                          <p className="icon_text">{item.logoText}</p>

                          {cardDetail === index ? (
                            <p className="card_detail_para">
                              {cardIconDetail(item.logoText)}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default OfferClients
