import React from 'react'
import Social from './piece/Social'

function ContactUsSection() {
  return (
    <section id="contact-me">
        <div className="container-fluid mt-5 mb-5">
            <div className="contact-heading">
                <h1><span>Contact</span><span> Me</span></h1>	
            </div>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">
                    <h4>+91 70961 11131</h4>
                    <h5 className="mb-5"><a href="mailto:info@jasminshukla.com">info@jasminshukla.com</a></h5>
                    <h6>Address</h6>
                    <p>Shiv Shakti Krupa patel vadi - 8, <br/>
                    B/H T.B.Hosptal Jamnagar, <br/>
                    Gujrat India
                    </p>
                    <Social class='contact-social'></Social>
                    {/* <div className="contact-social">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                    </div> */}
                </div>
                <div className="col-lg-6 col-md-6 mb-4 home-contact">
                    <form action="#" method="get"> 
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" required />
                                </div>					
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <input type="submit" className="form-btn" value="SEND" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUsSection