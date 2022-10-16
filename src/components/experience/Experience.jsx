import React from 'react'
import "./experience.css"
import { FaHtml5, FaCss3Alt } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import { IoLogoNodejs } from "react-icons/io"
import { SiMongodb, SiReact, SiExpress, SiChakraui, SiTailwindcss } from "react-icons/si"
const Experience = () => {
  return (
    <div>
      <section id="skills">

        <h4>What Skills I Have</h4>
        <h1>My Experience</h1>

        <div className="container experience_container">
          <div className="experience_frontend">
            <h3> Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details ">
                <FaHtml5 className="experience_details-icon" />
                <div>
                <h4>HTML</h4>
                  <small className="text-light"> Experienced </small>
                </div>
              </article>
              
              <article className="experience_details ">
                <FaCss3Alt className="experience_details-icon"/>
                <div>
                <h4>CSS</h4>
              <small className="text-light"> Intermediate </small></div>
              </article> 


              <article className="experience_details ">
                <  DiJavascript1 className="experience_details-icon"/>
                <div>
                <h4>Javascript</h4>
             <small className="text-light"> Experienced </small></div>
              </article> 

              <article className="experience_details ">
                <  SiReact className="experience_details-icon"/>
                <div>
                <h4>React</h4>
                <small className="text-light"> Experienced </small></div>
              </article> 

              <article className="experience_details ">
                <SiTailwindcss className="experience_details-icon"/>
                <div>
                <h4>Tailwind</h4>
              <small className="text-light"> Intermediate </small></div>
              </article> 


              <article className="experience_details ">
                <SiChakraui className="experience_details-icon"/>
                <div>
                <h4>Chakra UI</h4>
                <small className="text-light"> Experienced </small></div>
              </article>


            </div>
          </div>
          <div class Name="experience_backend">
            <h3> Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details ">
                <SiMongodb className="experience_details-icon"/>
                <div>
                <h4>MongoDB</h4>
                <small className="text-light"> Experienced </small></div>
              </article>


              <article className="experience_details ">
                <SiExpress className="experience_details-icon"/>
                <div>
                <h4>Express JS</h4>
                <small className="text-light"> Experienced </small></div>
              </article>


              <article className="experience_details ">
                < IoLogoNodejs className="experience_details-icon"/>
               <div> <h4>Node JS</h4>
                <small className="text-light"> Experienced </small></div>
              </article>
</div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
