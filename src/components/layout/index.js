import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import "../../assets/font/stylesheet.scss"

const Index = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Index
