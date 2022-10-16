import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h3>Hello, I'm</h3>
          <h1> Shivam Moudgil</h1>
          <h1 className="text-light">Full Stack Developer</h1>
          <CTA />
          <HeaderSocials />
        </div>
      </header>
    </>
  );
};

export default Header;
