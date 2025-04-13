import React from 'react'
import EducationCard from './EducationCard'

export default function Education() {

    const educationData = [
        {
          duration: "July, 2024 – Present",
          title: "M.Sc. in Data Science, VIT, Vellore",
          description: "Currently I'm pursuing my post-graduation in Data Science from Vellore Institute of Technology, Vellore.",
          grade: "8.67/10 (1st Sem)",
          location: "Tamilnadu, India"
        },
        {
          duration: "Oct, 2021 – July, 2024",
          title: "B.Sc in IT (Data Science), MAKAUT, WB",
          description: "I have done my graduation in Information Technology specialized in Data Science from Maulana Abul Kalam Azad University of Technology, West Bengal.",
          grade: "9.19/10",
          location: "West Bengal, India"
        },
        {
          duration: "June, 2019 – August, 2021",
          title: "12th, (WBCHSE)",
          description: "I have done my 12th with Physics, Chemistry, Mathematics & Computer Science from West Bengal Higher Secondary Board.",
          grade: "8.9/10",
          location: "West Bengal, India"
        }
      ];

  return (
    <section className="section section-resume dark-bg-1">
        <div className="placeholder">
            <h5>Academics</h5>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2><span>My Education</span></h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pt-3">
                <div className="col-lg-10">
                    <div className="resume-box">
                        <ul>
                            {educationData.map((edu, index) => (
                                <EducationCard 
                                    key={index}
                                    duration={edu.duration}
                                    title={edu.title} 
                                    desc={edu.description}
                                    grade={edu.grade}   
                                    location={edu.location}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
