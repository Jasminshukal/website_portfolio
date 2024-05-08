import React from 'react'
import workimg from '../assets/img/work-exp.png'

export default function ExperienceSection() {
  return (
    <section id="work-exp" class="mt-5">
        <div class="container-fluid">
            <div class="work-exp-heading">
                <h1><span>Work</span><span> Exp.</span></h1>	
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-5 col-lg-5">
                    <ul class="list-group vertical-steps">
                        <li class="list-group-item completed">
                            <h4>App Gurus</h4> 
                            <span>March. 2023 to Present</span>
                            <h5>Sr Laravel Developer, Team Lead</h5>
                            <p>Laravel | React Js | Dev Opps</p>
                        </li>
                        <li class="list-group-item completed">
                            <h4>Anantsoft Computing</h4> 
                            <h5>Sr Laravel Devloper</h5>
                            <p>Laravel | Codignator PHP | Veu Js</p>
                        </li>
                    </ul>  
                </div>
                <div class="offset-md-1 offset-lg-1 col-md-6 col-lg-6 text-center pt-5">
                    <img class="img-fluid" src={workimg} alt="Work experiance" />
                </div>
            </div>
        </div>
    </section>

  )
}
