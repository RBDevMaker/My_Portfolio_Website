import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "Customology4U",
            subtitle: "Serverless E-Commerce Application",
            tech: "React + AWS Amplify + Lambda + API Gateway + DynamoDB + Cognito MFA + Serverless Backend",
            description: "A fully serverless, secure e-commerce platform supporting customizable products, user accounts, order history, and two-factor authentication. Built for a real small business, demonstrating scalable, production-quality cloud architecture.",
            features: [
                "Serverless backend (Lambda, API Gateway, DynamoDB, S3)",
                "React frontend with Amplify Hosting",
                "Product catalog with customization fields",
                "Shopping cart and secure checkout",
                "Cognito Authentication with MFA/2FA",
                "Customer dashboard and order history",
                "Admin panel for product and order management",
                "S3 image upload with presigned URLs"
            ],
            liveUrl: "https://www.customology4u.com",
            githubUrl: "https://github.com/RBDevMaker/Customology4U"
        },
        {
            title: "Pets Shelter",
            subtitle: "Pet Adoption Management System",
            tech: "React + Vite + AWS Amplify + Cognito Auth + Serverless Backend",
            description: "A modern, secure pet adoption management system featuring a public applicant portal and protected employee dashboard. Streamlines adoption applications, pet status tracking, and employee workflows.",
            features: [
                "Secure employee authentication with Amazon Cognito",
                "React frontend built with Vite and deployed on AWS Amplify",
                "Real-time adoption form submissions",
                "Employee dashboard for application review",
                "Application workflow: Pending, Approved, Pet Not Available",
                "Comprehensive reporting suite (Pet Status, Applications, Inventory)",
                "Automatic pet status updates",
                "Printable and downloadable reports"
            ],
            liveUrl: "https://main.def6bew6oruvs.amplifyapp.com",
            githubUrl: "https://github.com/RBDevMaker/pet-shelter-client"
        },
        {
            title: "Luxe Hair Studio",
            subtitle: "Appointment Booking System",
            tech: "Django + Docker + AWS App Runner + GitHub Actions CI/CD",
            description: "A beautifully designed appointment-booking system for hair and nail salons. Features elegant luxury-themed UI and fully automated CI/CD pipeline deploying to AWS App Runner using Docker and Amazon ECR.",
            features: [
                "Stylist booking workflow (Ann, Jackie, and Judy)",
                "Available time slot viewing",
                "Calendar-based appointment scheduling",
                "12-hour time format display",
                "SQLite data storage",
                "Responsive luxury-themed design",
                "Automated CI/CD with GitHub Actions",
                "Docker containerization and ECR deployment available"
            ],
            liveUrl: "https://jqwtf8s3yz.us-east-1.awsapprunner.com",
            githubUrl: "https://github.com/RBDevMaker/Appointment",
            inProgress: [
                "Email appointment confirmations",
                "SMS reminders",
                "Online payment processing",
                "Admin dashboard",
                "Customer account history",
                "Recurring appointments"
            ]
        },
        {
            title: "Professional Portfolio Website",
            subtitle: "Professional-Style Developer Portfolio",
            tech: "React + Vite + AWS Amplify + Serverless + CSS3 + Responsive Design + Professional Animations",
            description: "A modern, professional portfolio website designed with professional-style aesthetics to convey trust and credibility. Features comprehensive sections showcasing technical expertise, education, certifications, and project experience with subtle animations and responsive design.",
            features: [
                "Professional-style design with navy blue, blue, and white color scheme",
                "Responsive design optimized for all devices",
                "Smooth scrolling navigation with fixed header",
                "Professional animations and hover effects",
                "Comprehensive skills matrix organized by category",
                "Detailed project showcase with live links",
                "Education and certification sections",
                "Professional contact integration",
                "Accessibility-compliant design (WCAG standards)",
                "Performance-optimized CSS animations"
            ],
            liveUrl: "http://localhost:3000",
            githubUrl: "https://github.com/RBDevMaker/My_Portfolio_Website"
        }
    ]

    return (
        <section className="section">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <p className="project-tech">{project.tech}</p>
                            </div>
                            <div className="project-body">
                                <h4>{project.subtitle}</h4>
                                <p>{project.description}</p>

                                <h4>Key Features:</h4>
                                <ul>
                                    {project.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>

                                {project.inProgress && (
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <h4>More Available Features:</h4>
                                        <ul>
                                            {project.inProgress.map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="project-links">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                                            Live Website
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                            GitHub Repo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects