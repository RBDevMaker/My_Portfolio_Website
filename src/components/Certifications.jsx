import React from 'react'

const Certifications = () => {
    const certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2022",
            credentialId: "", // Add your actual credential ID if you have it
            description: "Validates foundational understanding of AWS Cloud concepts, services, and terminology",
            status: "Active"
        },
        {
            title: "AWS Business Accreditation",
            issuer: "Amazon Web Services",
            date: "2022",
            credentialId: "", // Add your actual credential ID if you have it
            description: "Demonstrates understanding of AWS business value proposition and cloud adoption strategies",
            status: "Active"
        },
        {
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "In Progress",
            credentialId: "", // Will be added upon completion
            description: "Demonstrates proficiency in developing applications on AWS",
            status: "Pending"
        },
        {
            title: "ASHA Certificate of Clinical Competence, CCC-SLP",
            issuer: "American Speech-Language-Hearing Association",
            date: "2006",
            credentialId: "", // Add your actual credential ID if you have it
            description: "Professional certification for speech-language pathologists demonstrating clinical competency and ethical practice",
            status: "Active"
        }
    ]

    return (
        <section className="section">
            <div className="container">
                <h2>Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="cert-header">
                                <h3>{cert.title}</h3>
                                <span className={`cert-status ${cert.status.toLowerCase()}`}>
                                    {cert.status}
                                </span>
                            </div>
                            <div className="cert-body">
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-date">Issued: {cert.date}</p>
                                {cert.credentialId && (
                                    <p className="cert-id">Credential ID: {cert.credentialId}</p>
                                )}
                                <p className="cert-description">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cert-note">
                    <p>
                        <strong>Note:</strong> I am continuously expanding my certification portfolio
                        to stay current with evolving cloud technologies and industry best practices.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Certifications