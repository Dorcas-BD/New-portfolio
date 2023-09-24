const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Dorcas B.</p>
      <div className="footer__social">
        <a
          target="_blank"
          href="https://www.github.com/Dorcas-BD"
          className="footer__icon"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/dorcasbamisile"
          className="footer__icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          href="https://www.twitter.com/Dorcas_BD"
          className="footer__icon"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="footer__copy">Dorcas Bamisile &copy; 2022</p>
    </footer>
  );
};

export default Footer;
