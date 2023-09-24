const Contacts = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <div className="contact__data">
          {[
            {
              title: "Email",
              description: "bamisiledorcas@gmail.com",
              icon: "ri-mail-line",
            },
            {
              title: "Phone Number",
              description: "+234 705 725 8425",
              icon: "ri-phone-line",
            },
          ].map((item, index) => (
            <div key={index} className="contact__information">
              <h3 className="contact__subtitle">{item.title}</h3>
              <span className="contact__description">
                <i className={`ri ${item.icon} contact__icon`}></i>
                {item.description}
              </span>
            </div>
          ))}
        </div>
        <form action="" className="contact__form">
          {["Name", "Email"].map((placeholder, index) => (
            <input
              key={index}
              type={index === 1 ? "email" : "text"}
              placeholder={placeholder}
              className="contact__input"
            />
          ))}
          <textarea
            name=""
            id=""
            cols="0"
            rows="10"
            placeholder="Message"
            className="contact__input"
          ></textarea>
          <input
            type="button"
            value="Send Message"
            className="contact__button button"
          />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
