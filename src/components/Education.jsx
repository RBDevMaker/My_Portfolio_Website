import React from 'react'

const Education = () => {
    const education = [
        {
            institution: "AWS Cloud Institute (ACI)",
            program: "Certificate / Cloud Training Program",
            field: "Cloud Computing / AWS",
            date: "Dec 2025",
            status: "Completed",
            description: "Comprehensive cloud computing and developer training program covering foundational to advanced AWS concepts and practical implementation.",
            coursework: [
                "Introduction to Cloud Foundations",
                "Developer Fundamentals",
                "AWS Cloud Operations 1 & 2",
                "AWS Cloud Fundamentals 1 & 2",
                "AI for Developers",
                "Developer Intermediate 1 & 2"
            ],
            skills: [
                "Amazon EKS - Containerized Solution for Kubernetes",
                "AWS Amplify",
                "Cloud Development",
                "Full-Stack Web Development",
                "Serverless Architecture Design",
                "Cloud Infrastructure Management",
                "DevOps and CI/CD Pipelines",
                "Database Design and Management",
                "API Development and Integration",
                "Container Orchestration",
                "Cloud Security Best Practices",
                "Microservices Architecture",
                "Version Control and Git",
                "Software Development Lifecycle",
                "Agile Development Methodologies",
                "Cloud Cost Optimization",
                "Monitoring and Logging",
                "Infrastructure as Code",
                "Artificial Intelligence Integration",
                "Problem-Solving and Debugging"
            ]
        },
        {
            institution: "Howard University",
            program: "Master of Science",
            field: "Medical Speech-Language Pathology/Pathologist",
            date: "2006",
            status: "Completed",
            description: "Advanced graduate degree in speech-language pathology, developing strong analytical, problem-solving, and communication skills that translate effectively to technical roles.",
            coursework: [
                "Clinical Assessment and Diagnosis",
                "Research Methods and Data Analysis",
                "Communication Disorders",
                "Therapeutic Intervention Strategies",
                "Professional Ethics and Standards",
                "Neuro-biology"
            ],
            skills: [
                "Analytical Problem Solving",
                "Data Analysis and Interpretation",
                "Client Communication",
                "Technical Documentation",
                "Quality Assurance"
            ]
        }
    ]

    return (
        <section className="section">
            <div className="container">
                <h2>Education</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="edu-header">
                                <div className="edu-title-section">
                                    <h3>{edu.institution}</h3>
                                    <p className="edu-program">{edu.program}</p>
                                    <p className="edu-field">{edu.field}</p>
                                </div>
                                <div className="edu-date-status">
                                    <span className="edu-date">{edu.date}</span>
                                    <span className={`edu-status ${edu.status.toLowerCase()}`}>
                                        {edu.status}
                                    </span>
                                </div>
                            </div>

                            <div className="edu-body">
                                <p className="edu-description">{edu.description}</p>

                                <div className="edu-coursework">
                                    <h4>{edu.institution === "Howard University" ? "Completed Training Areas:" : "Completed Training Modules:"}</h4>
                                    <ul className="coursework-list">
                                        {edu.coursework.map((course, courseIndex) => (
                                            <li key={courseIndex}>{course}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="edu-skills">
                                    <h4>Key Skills Developed:</h4>
                                    <div className="skills-tags">
                                        {edu.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education