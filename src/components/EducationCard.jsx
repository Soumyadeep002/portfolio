import React from 'react'

export default function EducationCard(props) {
  return (
    <li className="row g-0">
        <div className="col-sm-4 col-xl-3">
            <h6>{props.duration}</h6>
        </div>
        <div className="col-sm-8 col-xl-9 ps-xl-4">
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
            <p>CGPA: {props.grade}</p>
            <span>- {props.location}</span>
        </div>
    </li>
  )
}
