import React from "react"
import "./style/processfollow.scss"
import userlogo from "../../assets/images/process_left_logo.png"

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
        </div>
      </div>
    </div>
  )
}

export default Processfollow
