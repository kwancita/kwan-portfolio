import React from "react";
import "./about.css";
import Me from "../../assets/kwann.jpeg";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaFreeCodeCamp } from "react-icons/fa"
import { SiUdemy } from "react-icons/si"

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="abt-me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaFreeCodeCamp className="about_icon" />
              <h5>Responsive Web Design</h5>
              <small>freeCodeCamp</small>
            </article>
            <article className="about_card">
              <SiUdemy className="about_icon" />
              <h5>Web Development Bootcamp</h5>
              <small>Udemy</small>
            </article>
            <article className="about_card">
              <MdOutlineCastForEducation className="about_icon" />
              <h5>Coding Bootcamp</h5>
              <small>Flatiron school</small>
            </article>
          </div>
          <p>
            Loperamide may cause serious or life-threatening changes in your
            heart rhythm, especially in people who have taken more than the
            recommended amount. Tell your doctor if have or have ever had a
            prolonged QT interval (a rare heart problem that may cause irregular
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
