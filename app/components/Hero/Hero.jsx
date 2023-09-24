import React from "react";

const Hero = () => {
  return (
    <section className="home">
      <div className="home-social">
        <a
          href="https://www.linkedin.com/in/dorcasbamisile"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.twitter.com/Dorcas_BD"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.github.com/Dorcas-BD"
          target="_blank"
          className="home-social-icon"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="home-data">
        <h1 className="home-title">
          Hello,
          <br />
          I'm <span className="title-color">Dorcas Bamisile</span>
          <br />
          Software Developer
        </h1>
      </div>
      <div class="home-img">
        <img class="img" x="50" y="60" src="/perfil.png" />
      </div>
    </section>
  );
};

export default Hero;
