import { Fragment } from "react";
import "./App.css";
import Logo from "./images/logo.svg"

const App = () => {
  return (
    <Fragment>
      {/* MAIN */}
      <main className="main">

        <div className="container">

          <div className="main__wrap">

            <div className="main__top">

              <a href="/" className="logo">
                <img src={Logo} alt="logo" />

                <span>Nickelfox</span>
              </a>

              <nav className="main__menu">
                <a href="#!" className="menu__link">
                  Home
                </a>

                <a href="#!" className="menu__link">
                  Services
                </a>

                <a href="#!" className="menu__link">
                  Success Stories
                </a>

                <a href="#!" className="menu__link">
                  Blog
                </a>

                <a href="#!" className="menu__link-active">
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Row */}
            <div className="main__row">

              {/* Content */}
              <div className="main__content">
                <h1 className="title-1">
                  Designer FoxenStein
                </h1>

                <p className="main__text">
                  We  create solutions that have top notch ui/ux designs and software development standards, suitable for best web products &  iOS & Android apps, crafted with love & passion.
                </p>

                <a href="#!" className="main__button-green">Contact Us</a>

                <div className="main__buttons">
                  <button className="main__button">
                    <span>Icon</span>
                    <span>Text</span>
                  </button>
                </div>
              </div>
              {/* Content // */}

              {/* Image */}

              <div className="main__imageholder">
                <img src="" alt="error" />
              </div>

              {/* Image // */}
            </div>
            {/* Row // */}

          </div>
        </div>
      </main>
      {/* MAIN // */}
    </Fragment>
  )
}

export default App;