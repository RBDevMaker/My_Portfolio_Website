import React, { useState, useEffect } from 'react'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-brand">
                    <button onClick={() => scrollToSection('home')} className="brand-button">
                        RB<span className="brand-accent">Dev</span>
                    </button>
                </div>

                <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="nav-link"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navigation