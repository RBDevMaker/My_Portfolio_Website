import React from 'react'

const About = () => {
    return (
        <section className="section">
            <div className="container">
                <h2>About Me</h2>
                <div className="card">
                    <p>
                        I'm Rachelle Briscoe (RBDevMaker), a technologist passionate about building
                        cloud-first, serverless applications that solve meaningful problems. I build
                        modern, scalable, and secure applications using AWS, React, Amplify, Node, and Python.
                    </p>
                    <p>
                        My work focuses on cloud-native architectures, accessible web interfaces, and
                        real-world, user-centered solutions. I have extensive experience migrating production
                        websites from traditional hosting to fully serverless architectures on AWS Amplify,
                        with domain hosting and DNS powered by Route 53.
                    </p>
                    <p>
                        I possess deep experience working with Amazon Elastic Container Service for Kubernetes (EKS)
                        and Docker, enabling me to design, deploy, and manage scalable containerized applications
                        with high availability and reliability.
                    </p>
                    <p>
                        Throughout my career spanning over 20 years, I have trained others in Electronic Medical Records (EMR)
                        and used the latest technology to improve healthcare workflows and patient care. This experience has given
                        me a unique perspective on building user-centered applications that solve real-world problems.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About 