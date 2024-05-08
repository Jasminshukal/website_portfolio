import React from 'react'
import logo from '../assets/img/logo.png';

function MenusSection() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="index-2.html">
          <input className="img-fluid" type="image" src={logo} alt="logo" />
      </a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav nav-pills ml-auto">
              <li className="nav-item">
                    <a className="nav-link active" href="index-2.html">Home</a>
              </li>
              <li className="nav-item">
                    <a className="nav-link" href="about.html">About <span>Me</span></a>
              </li> 
              <li className="nav-item">
                    <a className="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav-item">
                    <a className="nav-link" href="blog.html">Blog</a>
              </li> 
              <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact <span>Me</span></a>
              </li>
            </ul>
      </div>
    </div>
</nav>
  )
}

export default MenusSection