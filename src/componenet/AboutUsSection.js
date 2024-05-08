import React from 'react'
import Service1 from '../assets/img/web-design.png'
import Service2 from '../assets/img/app-design.png'
import Service3 from '../assets/img/graphics-design.png'
import Service4 from '../assets/img/brand-design.png'

export default function AboutUsSection() {
  return (
    <section id="about" class="mt-4">
        <div class="container-fluid">
            <div class="about-me-heading">
                <h1><span>About</span><span> Me</span></h1>	
            </div>
        </div>						
        
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12">
                    <div class="about-content mt-4">
                        <p>
                        Hello, I'm <b>Jasmin Shukla</b>, a seasoned professional with seven years of hands-on experience in Information Technology. Throughout my career, I've dedicated five years to mastering the Laravel framework, complemented by extensive proficiency in PHP technology.
                        </p>
                        <p>

Currently, I serve as a Senior Laravel Developer at App Gurus, where I lead a team of three developers. In this role, I spearhead project management initiatives, from task creation and deadline setting to project estimation. Additionally, I actively contribute to the hiring process, conducting interviews to onboard top talent.
</p>
                      
                    </div>
                </div>
                <div class="offset-lg-1 col-lg-6 col-md-12 col-sm-12">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-sm-6 skill mb-2">
                            <span><img class="img-fluid" src={Service1} alt="Web design" /></span>Web Design
                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-6 skill mb-2">
                            <span><img class="img-fluid" src={Service2} alt="App Design" /></span>APP Design
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-sm-6 skill mb-2">
                            <span><img class="img-fluid" src={Service3}   alt="Graphics Design" /></span>Graphics Design
                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-6 skill mb-2">
                            <span><img class="img-fluid" src={Service4} alt="Brand Design" /></span>Brand Design
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
