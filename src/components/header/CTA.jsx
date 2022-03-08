import React from 'react'
import CV from '../../assets/kwann.jpeg'

function CTA() {
    return (
        <div>
            <div className="cta">
                <a href={CV} download className="btn">Download CV</a>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    )
}

export default CTA
