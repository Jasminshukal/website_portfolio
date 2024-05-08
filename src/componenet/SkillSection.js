import React from 'react'

export default function SkillSection() {
  return (
    <section id="skill-progress" class="mt-5">
        <div class="container-fluid">
            <div class="my-skill-heading">
                <h1><span>My</span><span> Skills</span></h1>	
            </div>
        </div>
        <div class="clearfix"></div>
        
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-6 col-lg-6 col-sm-6 mb-4">
                    <span>Photoshop</span><span class="float-right">90%</span>
                    <div class="skillbar clearfix mb-3" data-percent="90%">
                        <div class="skillbar-bar"></div>
                    </div> 
                </div>
                <div class="col-md-6 col-lg-6 col-sm-6 mb-4">
                    <span>Graphics Design</span><span class="float-right">95%</span>
                    <div class="skillbar clearfix mb-3" data-percent="95%">
                        <div class="skillbar-bar"></div>
                    </div> 
                </div>
                <div class="col-md-6 col-lg-6 col-sm-6 mb-4">
                    <span>Illustrator</span><span class="float-right">85%</span>
                    <div class="skillbar clearfix mb-3" data-percent="85%">
                        <div class="skillbar-bar"></div>
                    </div> 
                </div>
                <div class="col-md-6 col-lg-6 col-sm-6 mb-4">
                    <span>HTML / CSS</span><span class="float-right">87%</span>
                    <div class="skillbar clearfix mb-3" data-percent="87%">
                        <div class="skillbar-bar"></div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}
