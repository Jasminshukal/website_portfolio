import React from 'react'
import portfolio1 from '../assets/img/1.jpg'

export default function MyworkSection() {
  return (
    <section id="my-work" class="mt-5 pt-5">
        <div class="container">
                <div class="row mb-4">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-12 text-center">	
                        <div class="work-title">
                            <h1><span>My</span><span> Work</span></h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-12">
                        <div class="tabs-wrapper"> 
                            <ul class="nav classic-tabs tabs-cyan about-tab justify-content-center" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link waves-light active" data-toggle="tab" href="#panel51" role="tab" aria-expanded="true">Web Design</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link waves-light" data-toggle="tab" href="#panel52" role="tab" aria-expanded="false">App Design</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link waves-light" data-toggle="tab" href="#panel53" role="tab" aria-expanded="false">Graphic Design</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link waves-light" data-toggle="tab" href="#panel54" role="tab" aria-expanded="false">Brand Design</a>
                                </li>
                            </ul>
                        </div>
                    </div>	
                </div>
                
                <div class="tab-content about-tab-pane text-center mt-5">
                    <div class="tab-pane fade in active show" id="panel51" role="tabpanel" aria-expanded="true">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 portfolio-item">
                                <a class="portfolio-link" data-toggle="modal" href="#portfolio1">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content">
                                            <i class="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src={portfolio1} alt="portfolio" />
                                </a>
                                <div class="portfolio-caption">
                                    <p class="text-muted">Illustration 1</p>
                                </div>
                                {/* The Modal */}
                                <div class="modal fade" id="portfolio1">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                    
                                            {/* Modal Header */}
                                            <div class="modal-header">
                                                <h4 class="modal-title">Project Name</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>
                                        
                                            {/* Modal body */}
                                            <div class="modal-body">
                                                <img class="img-fluid model-img mt-2 mb-3" src={portfolio1} alt="portfolio" />
                                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            
                                                <p class="pro-date">Date: January 2017</p>
                                                <p class="pro-client">Client: Explore </p>
                                                <p class="pro-category">Category: Graphic Design </p>
                                            </div>
                                            
                                            {/* Modal Footer */}
                                            <div class="modal-footer">
                                                <button type="button" class="btn-close" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                                            </div>
                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
