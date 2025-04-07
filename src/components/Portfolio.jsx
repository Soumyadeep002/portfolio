import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import Project1 from '../assets/img/irzone.webp'
import Project2 from '../assets/img/fakenews.webp'
import Project3 from '../assets/img/healthmonitor.webp'
import Project4 from '../assets/img/safetyeasy.webp'
import Project5 from '../assets/img/mymed.webp'

export default function Portfolio() {

    const projects = [
        {
          id: 1,
          title: "Performance Analysis of Indian Railway Zones",
          description: "The study aims to enhance the efficiency and effectiveness of Indian Railways (IR), a public sector infrastructural organization, through a performance analysis using various Multi-Criteria Decision-Making (MCDM) methods. ",
          image: Project1,
          category: "Data Sc",
          techs: ['Python', 'Excel', 'MCDM'],
          link: "https://doi.org/10.31181/dma31202549",
          linkTitle: "View Publication"
        },
        {
          id: 2,
          title: "Health Monitoring of Factory Workers",
          description: "An IoT based device has been developed to monotor health of workers to prevent health hazards. ",
          image: Project3,
          category: "Data Sc",
          techs: ['IoT', 'Python', 'Flask'],
          link: "https://github.com/sugata2002/esp8266_mqtt_dht11",
          linkTitle: "View Project"
        },
    
        {
          id: 3,
          title: "Fake News Detection using ML",
          description: "A comparison made using Multiple Supervised ML models to detect fake news. ",
          image: Project2,
          category: "Data Sc",
          techs: ['Python', 'Scikit-Learn'],
          link: "https://github.com/Soumyadeep002/Fake-News-Detection",
          linkTitle: "View Project"
        },
        {
            id: 4,
            title: "Safety Made Easy, India",
            description: "A company, where construction safety training has been provided. ",
            image: Project4,
            category: "Web",
            techs: ['PhP', 'Laravel'],
            link: "https://safetymadeeasyindia.com",
            linkTitle: "Visit"
          },
        {
            id: 5,
            title: "Pharmacy Management System",
            description: "A company, where a complete pharmacy management system has been developed with a sophisticated backend and frontend. ",
            image: Project5,
            category: "Web",
            techs: ['PhP', 'Laravel'],
            link: "https://mymedland.com",
            linkTitle: "Visit"
          },
    
        // Add more projects here...
      ];


      const [activeCategory, setActiveCategory] = useState("Data Sc");

      const filteredProjects =
        activeCategory === "All"
          ? projects
          : projects.filter((proj) => proj.category === activeCategory);
    
      const categories = ["All", "Data Sc", "Web"];

  return (
    <section id="work" data-scroll-index="3" className="section portfolio-section">
        <div className="placeholder">
            <h5>Projects</h5>
        </div>

              {/* Filter Buttons */}
   

        <div className="container">
            <div className="row justify-content-center mb-3">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2><span>My Projects</span></h2>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                {categories.map((cat) => (
                    <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`btn ${
                        activeCategory === cat ? "btn-primary" : "btn-outline-secondary"
                    }`}
                    >
                    {cat}
                    </button>
                ))}
                </div>
            <div className="row g-3 lightbox-gallery">
                
                
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} title={project.title} desc={project.description} techs={project.techs} img={project.image} link={project.link} linktitle={project.linkTitle}/>
                ))}

            </div>
        </div>
    </section>
  )
}
