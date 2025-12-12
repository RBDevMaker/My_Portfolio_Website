import React from 'react'

const Contact = () => {
    return (
        <section className="section">
            <div className="container">
                <h2>Contact</h2>
                <div className="card">
                    <p>
                        If you'd like to collaborate, discuss a project, or explore opportunities,
                        feel free to reach out through any of the following channels:
                    </p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>Email</h3>
                            <a href="mailto:hushe78@gmail.com">hushe78@gmail.com</a>
                        </div>

                        <div className="contact-item">
                            <h3>GitHub</h3>
                            <a href="https://github.com/RBDevMaker" target="_blank" rel="noopener noreferrer">
                                github.com/RBDevMaker
                            </a>
                        </div>

                        <div className="contact-item">
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/rachellebriscoe" target="_blank" rel="noopener noreferrer">
                                LinkedIn Profile
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact