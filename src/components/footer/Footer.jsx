import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

function Footer() {
    return (
        <footer>
            <a href="#" className="footer_logo">KWAN</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.facebook.com/kwanz.pruttisarikorn/"><FaFacebookF/></a>
                <a href="https://www.instagram.com/santa_kwan/"><FiInstagram/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Kwan. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
