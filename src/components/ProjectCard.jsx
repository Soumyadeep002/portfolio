import React from 'react'

export default function ProjectCard(props) {

    const truncateWords = (text, limit = 10) => {
        const words = text.split(" ");
        return words.length > limit
          ? words.slice(0, limit).join(" ") + "..."
          : text;
      };
  return (
    <div className="col-lg-6">
        <div className="portfolio-box row g-0">
            <div className="portfolio-img col-sm-6 col-lg-7">
                <img src={props.img} alt="Image"/>
            </div>
            <div className="portfolio-info col-sm-6 col-lg-5">
                <h2>{props.title}</h2>
                <p>{truncateWords(props.desc, 8)}</p>
                <div className="nav">
                    {/* <span>Ui Design</span> */}
                    {props.techs.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}    
                </div>
                <a href={props.link} target='_blank' className='px-btn px-btn-white mt-4'>{props.linktitle}</a>
            </div>
        </div>
    </div>
  )
}
