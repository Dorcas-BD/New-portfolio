import "./Projects.css";

const projects = [
  {
    link: "https://farm-logistics-puce.vercel.app/",
    imgSrc: "/work1.png",
  },
  {
    link: "https://pizzaa-website.netlify.app/",
    imgSrc: "/work2.png",
  },
  {
    link: "https://blockchain-krypt-react-app.netlify.app/",
    imgSrc: "/work3.png",
  },
  { link: "https://calculate-it.netlify.app", imgSrc: "assets/img/work4.png" },
  {
    link: "https://react-note-taking-app.netlify.app",
    imgSrc: "/work5.png",
  },
  {
    link: "https://movie-box-tymr.vercel.app/",
    imgSrc: "/work6.PNG",
  },
];

const Projects = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="work-container bd-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            target="_blank"
            href={project.link}
            className="work-img"
          >
            <img src={project.imgSrc} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
