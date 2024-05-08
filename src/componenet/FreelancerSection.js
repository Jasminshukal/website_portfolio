import React from 'react'
import freelancer from '../assets/img/freelancer.png';

export default function FreelancerSection() {
  return (
    <section id="freelance">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-7 col-sm-7">
                    <div class="freelance-text mb-4">
                        <h2>I’m Available for <span>Freelance</span> Work</h2>
                    </div>
                    <div class="hire-me">
                        <a href="#">HIRE ME NOW</a>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5">
                    <img class="img-fluid freelancer-img" src={freelancer} alt="freelancer" />
                </div>
            </div>
        </div>
    </section>
  )
}
