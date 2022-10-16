import React from 'react'
import "./education.css"
import {BsFillPatchCheckFill} from "react-icons/bs"
const Education = () => {
  return (
      <div>
          <section id="experience">
              <h4>My</h4>
              <div className="MainID">
                  <div className='education_png'>
                      <img src="https://i.gifer.com/origin/e4/e4cd0639b5a5c1e164aeff4370ed2365_w200.webp" alt="" />
                  </div>
                  <div>    <h1>Education Qualifications</h1></div>
              </div>
          
          <div className="maindiv">
             <div>
                      <div>
                         < BsFillPatchCheckFill className="checkFill"/>
                  <h2>Web Development Course</h2>
                          <a href="https://www.masaischool.com/"><h3>Masai School</h3></a>
                  <p>04/2022 to 12/2022</p>
              </div>
                      <div>
                          < BsFillPatchCheckFill className="checkFill" />
                  <h2>MCA</h2>
                          <a href="https://www.lpu.in/"><h3>Lovely Professional University</h3></a>
                  <p>08/2022 -present</p>
              </div>
                      <div>
                          < BsFillPatchCheckFill className="checkFill" />
                  <h2>BSc.Hons.(Chemistry)</h2>
                          <a href="http://cpuh.in/"><h3>Career Point University</h3></a>
                  <p>07/2018 to 10/2021</p>
                  </div>
                  </div>
               
              </div>
          </section>
    </div>
  )
}

export default Education;
