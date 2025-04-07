import React from 'react'
import ProjectCard from './ProjectCard'
import Project1 from '../assets/img/portfolio-01.jpg'
import Project2 from '../assets/img/portfolio-02.jpg'
import Project3 from '../assets/img/portfolio-03.jpg'
import Project4 from '../assets/img/portfolio-04.jpg'

export default function Portfolio() {
  return (
    <section id="work" data-scroll-index="3" className="section portfolio-section">
        <div className="placeholder">
            <h5>portfolio</h5>
        </div>
        <div className="container">
            <div className="row justify-content-center mb-3">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2><span>My Portfolio</span></h2>
                    </div>
                </div>
            </div>
            <div className="row g-3 lightbox-gallery">
                
                <ProjectCard img={Project1} title={"Title 1"} desc={"lorem ipsum dolor emit."} techs={['AWS', 'Python', 'PHP']}/>
                <ProjectCard img={Project2} title={"Title 2"} desc={"lorem ipsum dolor emit."} techs={['AWS', 'Python', 'PHP']}/>
                <ProjectCard img={Project3} title={"Title 3"} desc={"lorem ipsum dolor emit."} techs={['AWS', 'Python', 'PHP']}/>
                <ProjectCard img={Project4} title={"Title 4"} desc={"lorem ipsum dolor emit."} techs={['AWS', 'Python', 'PHP']}/>

            </div>
        </div>
    </section>
  )
}
