import React from 'react'

export default function Social(props) {
    console.log(props);
  return (
    <div className={props.class}>
    <a href="https://www.facebook.com/jasmin.r.shukal" target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/in/jasmin-shukla/"  target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
    <a href="https://www.instagram.com/mr.jasmin_shukla/"  target='_blank' rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
    <a href="https://www.instagram.com/mr.jasmin_shukla/"  target='_blank' rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
</div>
  )
}
