import React from 'react'
import {BsLinkedin } from 'react-icons/bs'
import {FaGithub, FaBlogger} from 'react-icons/fa'


function HeaderSocial() {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/wasanta-pruttisarikorn-b084041a2/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/kwancita" target="_blank"><FaGithub/></a>
            <a href="https://medium.com/@kwan92" target="_blank"><FaBlogger/></a>
        </div>
    )
}

export default HeaderSocial
