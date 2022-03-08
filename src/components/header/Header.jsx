import React from 'react'
import CTA from './CTA'
import './header.css'
import Me from '../../assets/k_profile.png'
import HeaderSocial from './HeaderSocial'

function Header() {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Kwan Wasanta</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={Me} alt="me"/>
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
