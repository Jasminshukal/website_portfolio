import React from 'react'
import stepOneImage from '../assets/img/step-dott.png'
import searchImage from '../assets/img/search.png'
import mindImage from '../assets/img/mind.png'
import bookImage from '../assets/img/book.png'
import rocketImage from '../assets/img/rocket.png'

export default function HowtoworkSection() {
  return (
    <section id="how-work" class="mt-5">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-12 col-lg-12 col-sm-12 col-12 text-center">	
                    <div class="how-i-work-title">
                        <h1><span>How i</span><span> Work</span></h1>
                    </div>
                </div>
            </div>
            
            <div class="step-line">
            <ul>
                <li>
                    <img class="img-fluid mb-4" src={searchImage} alt="search" />
                    <div class="step  mb-4">
                        <img src={stepOneImage} alt="step-dott" />
                    </div>
                    <h1>01</h1>
                    <h6>Briefing</h6>
                </li>
                <li>
                    <img class="img-fluid mb-4" src={mindImage} alt="mind" />
                    <div class="step  mb-4">
                        <img src={stepOneImage} alt="step-dott" />
                    </div>
                    <h1>02</h1>
                    <h6>Idea & Draft</h6>
                </li>
                <li>
                    <img class="img-fluid mb-4" src={bookImage} alt="book" />
                    <div class="step  mb-4">
                        <img src={stepOneImage} alt="step-dott" />
                    </div>
                    <h1>03</h1>
                    <h6>Design</h6>
                </li>
                <li>
                    <img class="img-fluid last-step-img" src={rocketImage} alt="rocket" />
                    <div class="step mb-4">
                    <img src={stepOneImage} alt="step-dott" />
                    </div>
                    <h1>04</h1>
                    <h6>Launch</h6>
                </li>
            </ul>
        </div>
        </div>
    </section>
  )
}
