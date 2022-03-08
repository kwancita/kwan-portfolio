import React from "react";
import "./about.css";
import Me from "../../assets/kwan.jpeg";
import { MdSchool } from "react-icons/md";
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
              <MdSchool className="about_icon" />
              <h5>Software Engineer</h5>
              <small>Flatiron school</small>
            </article>
          </div>
          <p>
          I am a software engineer passionate about blending client expectations with business goals to deliver excellent & profitable experiences. My goals are to improve the organizational efficiency, productivity, and overall success of various enterprises through effective technical and analytical support. In addition, I am interested in developing my skills and abilities to grow.
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
