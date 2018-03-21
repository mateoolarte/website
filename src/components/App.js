import React, { Component } from "react"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Cover } from "./Cover"
import { About } from "./About"
import { Work } from "./Work"

class App extends Component {
  constructor() {
    super()

    this.changeMenu = this.changeMenu.bind(this)

    this.handleFixedMenu = function(event) {
        const widthScreen = event.innerHeight - 180
        let menu = document.querySelector(".mainNav")
        let header = document.querySelector(".header")

        if (event.scrollY >= widthScreen) {
          header.classList.add("header--fixed")
          
          if (window.matchMedia("(min-width: 769px)").matches) {
            menu.classList.add("mainNav--fixed")
          } 
        } else {
          let allItemsMenu = document.querySelectorAll(".mainNav__listItem");

          [].forEach.call(allItemsMenu, function (el) {
            el.classList.remove("active")
          })

          if (window.matchMedia("(min-width: 769px)").matches) {
            menu.classList.remove("mainNav--fixed")
          }

          header.classList.remove("header--fixed")
        }
    }
  }

  componentDidMount() {
    let handleFixedMenu = this.handleFixedMenu

    window.addEventListener("load", function (e) {
      handleFixedMenu(e.currentTarget)
    })

    window.addEventListener("scroll", function (e) {
      handleFixedMenu(e.currentTarget)
    })
  }

  changeMenu(e) {
    this.handleFixedMenu(e.view)
  }

  scrollLinks(e) {
    let item = e.target.parentNode

    if (item.classList.contains("active")) {

    } else {
      let allItemsMenu = document.querySelectorAll(".mainNav__listItem");

      [].forEach.call(allItemsMenu, function (el) {
        el.classList.remove("active")
      })

      let targetOffset, currentPosition, yScroll
      item.classList.add("active")

      if (window.pageYOffset) {
        yScroll = window.pageYOffset
      } else if (document.documentElement && document.documentElement.scrollTop) {
        yScroll = document.documentElement.scrollTop
      } else if (document.body) {
        yScroll = document.body.scrollTop
      }

      targetOffset = document.getElementById(e.target.hash.substr(1)).offsetTop
      currentPosition = yScroll

      document.body.classList.add("in-transition")
      document.body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)"

      window.setTimeout(function() {
        document.body.classList.remove("in-transition")
        document.body.style.cssText = ""
        window.scrollTo(0, targetOffset)
      }, 800)
    }

    e.preventDefault()
  }

  render() {
    return (
      <section className="wrapper" onWheel={this.changeMenu}>
        <Header />
        <Nav smoothScroll={this.scrollLinks} />
        <Cover />
        <About />
        <Work />
      </section>
    )
  }
}

export default App
