import React from "react"
import "./style/mistriCards.scss"

import cardLogoOne from "../../assets/images/footerlogoOne.png"
import cardLogoTwo from "../../assets/images/footerlogoTwo.png"
import cardLogoThree from "../../assets/images/footerlogoThree.png"
import mistriLogo from "../../assets/images/mistriLogo.png"

const cardInfo = [
  {
    cardImg: cardLogoOne,
    cardHeading: "our location",
    cardPara:
      "House # 01, Avenue # A, Road # 03,Section # 11, Mirpur, Dhaka, BD.",
  },
  {
    cardImg: cardLogoTwo,
    cardHeading: "opening hour",
    cardPara:
      "Monday - Thursday @09.00 - 17.00 Friday & Saturday @10.00 - 16.00",
  },
  {
    cardImg: cardLogoThree,
    cardHeading: "call us today",
    cardPara:
      "Telephone: +880 1719 45 75 93 02 Fax: +880 1626 130 32, +880 24 10",
  },
]
const MistriCards = () => {
  return (
    <div className="main_container">
      <div className="feature_content">
        <div className="feature_cards">
          {cardInfo.map((item, index) => (
            <div
              key={index}
              className={
                (index === 1 && "feature_info_card feature_card_Two") ||
                (index === 0 && "feature_info_card") ||
                "feature_info_card last_card"
              }
            >
              <div className="inner_content">
                <img className="card_Img" src={item.cardImg} alt="card logo" />
              </div>
              <div className="text_content">
                <h3 className="inner_heading">{item.cardHeading}</h3>
                <div className="horizontal_line"></div>
                <p className="inner_para">
                  {item.cardPara}
                  {/* <br /> */}
                  {/* {item.cardPara.slice(34)} */}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mistri_logo">
          <img className="below_logo" src={mistriLogo} alt="mistri logo" />
        </div>
      </div>
    </div>
  )
}

export default MistriCards
