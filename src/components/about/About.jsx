import React from 'react'
import "./About.css"
import ME from "../../../public/nope.jpg"
import {FaAward} from "react-icons/fa"
import { FaGithubAlt } from "react-icons/fa"
import { GoProject } from "react-icons/go"
const About = () => {
  return (
    <div>
      <section id='about'>
        <h4>Get To Know</h4>
        <h1>About Me</h1>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__image">
              <img src={ME} alt="Shivam_about" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className="about__icon"/>
                <h5>Grind</h5>
                <small>1000+ hours coding</small>
              </article>
              <article className='about__card'>
                <GoProject className="about__icon"/>
                <h5>Projects</h5>
                <small>200+ projects</small>
              </article>
              <article className='about__card'>
                <FaGithubAlt className="about__icon"/>
                <h5>Github</h5>
                <small>255+ commits</small>
              </article>
            </div>
            <p>
              My name is Shivam Moudgil. Iam from Himachal Pradesh. Iam graduated in BSc Hons.(Chemistry). I had an interest in making websites and applications so joined Masai School and there i had hands-on
              experience to develop many websites/applications. Looking to further enhance my
              skills as a future full-stack developer
            </p>
            {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
