import React, { useState } from "react";
import {BiHome, BiBook} from "react-icons/bi";
import {FcAbout} from "react-icons/fc";
import {MdContactMail} from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import "./nav.css"
const NAv = () => {
    const [active,setActive]=useState("#")
  return (
    <div>
      <nav>
              <a href="#" className={active == "#" ? "active" : ""}
                  onClick={() => setActive("#")}>
          <BiHome />
        </a>
              <a href="#about" className={active == "#about" ? "active" : ""} onClick={()=>setActive("#about")}>
          <FcAbout />
        </a>
              <a href="#experience" className={active == "#experience" ? "active" : ""} onClick={() => setActive("#experience")}>
          <BiBook />
        </a>
              <a href="#skills" className={active == "#skills" ? "active" : ""} onClick={() => setActive("#skills")}>
          <GiSkills />
        </a>
              <a href="#services" className={active == "#services" ? "active" : ""} onClick={() => setActive("#services")}>
          <RiServiceLine />
        </a>
              <a href="#contact" className={active == "#contact" ? "active" : ""} onClick={() => setActive("#contact")}>
          <MdContactMail />
        </a>
      </nav>
    </div>
  );
};

export default NAv;
