import React from 'react'
import AboutImg from '../assets/img/about-me.jpg'

export default function About() {
  return (
    <section id="about" data-scroll-index="1" className="section about-section dark-bg-1">
        <div className="placeholder">
            <h5>About</h5>
        </div>
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-7 ps-xl-5">
                    <div className="about-row about-text">
                        <div className="sm-title">
                            <h3>About Me</h3>
                        </div>
                        <h6>Hello, I am a <span>Data Science Student</span> and <span>Full-Stack Web developer</span></h6>
                        <p>with a focus on machine learning, statistical modeling, and data-driven problem-solving. I enjoy turning complex data into meaningful insights and building smart solutions that make an impact.</p>
                        <p>Alongside my academic journey, I'm a full-stack web developer with a strong backend focus. I work with Laravel, Node.js, MySQL, and MongoDB, and build responsive frontends using React and Tailwind CSS. I love crafting scalable, clean, and efficient web applications from end to end.</p>
                    </div>
                    <div className="about-row tag-text">
                        <div className="sm-title">
                            <h3>Tools</h3>
                        </div>
                        <div className="nav">
                            <span>Power BI</span>
                            <span>Tableau</span>
                            <span>Postman</span>
                        </div>
                    </div>
                    <div className="about-row tag-text">
                        <div className="sm-title">
                            <h3>Technologies and Skills</h3>
                        </div>
                        <div className="nav">
                            <span>Python</span>
                            <span>C</span>
                            <span>Javascript</span>
                            <span>Html</span>
                            <span>Css</span>
                            <span>React</span>
                            <span>php</span>
                            <span>Node JS</span>
                        </div>
                    </div>
                    <div className="about-row tag-text">
                        <div className="sm-title">
                            <h3>Frameworks</h3>
                        </div>
                        <div className="nav">
                            <span>Pytorch</span>
                            <span>Tensorflow</span>
                            <span>Express JS</span>
                            <span>Laravel</span>
                            <span>Django</span>
                            <span>Flask</span>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-left">
                        <img src={AboutImg} title="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
