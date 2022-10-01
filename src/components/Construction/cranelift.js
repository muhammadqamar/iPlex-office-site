import React from "react"
import "./style/cranelift.scss"
import cardlogo from "../../assets/images/card_crane_logo.png"
import cardlogo2 from "../../assets/images/card_logo2.png"
import cardlogo3 from "../../assets/images/card_logo3.png"

const cardlifting = [
  {
    img: cardlogo,
    heading: "crane lifting",
    para: "Lorem ipsum dolor sit amet, cons. adipisicing elit, sed do eiusmod.",
  },
  {
    img: cardlogo2,
    heading: "home plumbing",
    para: "Lorem ipsum dolor sit amet, cons. adipisicing elit, sed do eiusmod.",
  },
  {
    img: cardlogo3,
    heading: "house plans",
    para: "Lorem ipsum dolor sit amet, cons. adipisicing elit, sed do eiusmod.",
  },
]

const Cranelift = () => {
  return (
    <div className="hero_lift_container">
      <div className="crane_bx">
        {cardlifting.map((item, index) => (
          <>
            <div key={index} className="cards_bg_img">
              <div className="overlay"></div>
              <div className="img_bx">
                <img className="img_logo" src={item.img} alt=" card logo" />
              </div>
              <div className="box_title">
                <h3 className="card_heading">{item.heading}</h3>
                <div className="horizontal_line"></div>
                <p className="card_para">{item.para}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="crane_last_heading">
        <h4 className="inner_heading">
          WE HAVE COMPLETED LOT OF PROJECTS. YOU CAN HIRE US FOR YOUR FUTURE
          PROJECT.
        </h4>
      </div>
    </div>
  )
}

export default Cranelift
