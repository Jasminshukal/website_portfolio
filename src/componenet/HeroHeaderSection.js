import React from 'react'
import JasminShuklaHeroImage from '../assets/img/header-img.png'
import Social from './piece/Social'

export default function HeroHeaderSection() {
  return (
    <header className="header-top">
    <div className="container pt-5">
      <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <input type='image' className="img-fluid" src={JasminShuklaHeroImage} alt="header image" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="hello">
                  <h2>hello</h2>
              </div>
              <div className="name mt-4">
                  <h1><span>I'm</span><span> Jasmin Shukla </span></h1>
                  <h5>Laravel Devloper </h5>
              </div>
              <div className="resume mt-4">
                  <a href="/jasminCv.pdf" target='_blank'>MY RESUME</a>
              </div>
              <Social class='social'></Social>
             
            </div>
      </div>
    </div>
</header>
  )
}
