const Footer = () => {
    const socialLinks = [
      {
        icon: "fab fa-linkedin-in",
        url: "https://www.linkedin.com/in/davey-mason/",
        title: "Connect with me!",
      },
      {
        icon: "fab fa-github",
        url: "https://www.github.com/daveymason",
        title: "Check out my code!",
      },
      {
        icon: "fas fa-envelope",
        url: "mailto:daveymason@outlook.com",
        title: "E-mail me!",
      },
      {
        icon: "fa-brands fa-meta",
        url: "facebook.com",
        title: "Meta!",
      },
      {
        icon: "fa-brands fa-twitter",
        url: "twitter.com",
        title: "Tweet me!",
      },
    ];
  
    const navLinks = [
      { href: "#home", text: "About", icon: "fas fa-user" },
      { href: "#about", text: "Projects", icon: "fas fa-project-diagram" },
      { href: "#contact", text: "Contact Me", icon: "fas fa-envelope" },
    ];

    const styles = {
          footer: {
    backgroundColor: "#000",
    color: "white",
    padding: "10px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "99%",
    position: "fixed",
    bottom: 0,
    margin: 0,
  },  navLinks: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  navLinkItem: {
    marginRight: "15px",
  },
  navLinkIcon: {
    color: "#B3A0C9",
    marginRight: "5px",
  },
  socialIcons: {
    display: "flex",
  },
  socialIcon: {
    margin: "0 10px",
    color: "white",
    fontSize: "1.5rem",
  },
    };
  
    return (
      <nav style={styles.footer}>
        <div style={styles.socialIcons}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              title={link.title}
              style={styles.socialIcon}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <ul style={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item" style={styles.navLinkItem}>
              <a className="nav-link" href={link.href}>
                <i className={link.icon} style={styles.navLinkIcon}></i>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default Footer;