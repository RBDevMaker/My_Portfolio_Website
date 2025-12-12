import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="profile-photo">
                        <img
                            src="/RBriscoe.JPEG"
                            alt="Rachelle Briscoe - Professional Headshot"
                            className="profile-image"
                        />
                    </div>
                    <div className="header-text">
                        <h1>Rachelle Briscoe</h1>
                        <p className="subtitle">Full Stack Developer</p>
                        <p className="tech-stack">
                            Serverless • Cloud (AWS) • React • Python • Container Orchestration
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header