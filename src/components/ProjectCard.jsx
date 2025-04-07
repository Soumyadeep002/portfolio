import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="col-lg-6">
        <div className="portfolio-box row g-0">
            <div className="portfolio-img col-sm-6 col-lg-7">
                <img src={props.img} alt="Image"/>
            </div>
            <div className="portfolio-info col-sm-6 col-lg-5">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <div className="nav">
                    {/* <span>Ui Design</span> */}
                    {props.techs.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}    
                </div>
                <button className='px-btn px-btn-white mt-4'>View Project</button>
            </div>
        </div>
    </div>
  )
}
