import React from 'react'

const Skills = () => {
    const skillCategories = [
        {
            title: "Cloud & Serverless",
            skills: [
                "AWS Lambda",
                "API Gateway",
                "DynamoDB",
                "S3",
                "Cognito",
                "CloudFormation",
                "SAM",
                "Amplify",
                "EventBridge",
                "Route 53"
            ]
        },
        {
            title: "Container Orchestration",
            skills: [
                "Amazon EKS",
                "Kubernetes",
                "Docker",
                "Docker Compose",
                "AWS ECS",
                "Amazon ECR",
                "Terraform",
                "Jenkins",
                "Argo CD",
                "AWS App Runner"
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                "React",
                "JavaScript",
                "TypeScript",
                "Vite",
                "TailwindCSS",
                "HTML5",
                "CSS3",
                "Responsive Design",
                "API Integration",
                "Accessibility (WCAG)"
            ]
        },
        {
            title: "Backend Development",
            skills: [
                "Node.js",
                "Python",
                "Django",
                "REST APIs",
                "Microservices",
                "SQLite",
                "JSON/YAML",
                "Shell/Bash/ZSH",
                "Server Architecture",
                "Database Design"
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                "GitHub Actions",
                "CI/CD Pipelines",
                "CodeCommit",
                "CodeBuild",
                "Amplify Hosting",
                "Version Control (Git)",
                "Figma",
                "Project Management",
                "Code Review",
                "Testing Strategies"
            ]
        },
        {
            title: "Specialized Skills",
            skills: [
                "Language Translation",
                "American Sign Language",
                "Accessibility Design",
                "User-Centered Design",
                "Technical Documentation",
                "Problem Solving",
                "System Architecture",
                "Performance Optimization",
                "Private Practice Management",
                "Healthcare Billing & Revenue Management",
                "Independent Business Operations"
            ]
        }
    ]

    return (
        <section className="section">
            <div className="container">
                <h2>Skills & Technologies</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills