import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
    return (
        <div className="App">
            <Navigation />
            <div id="home">
                <Header />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="education">
                <Education />
            </div>
            <div id="certifications">
                <Certifications />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    )
}

export default App