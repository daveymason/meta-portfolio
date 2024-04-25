import { border, borderBottom, fontSize, padding } from "@mui/system";
import React, { useState, useEffect } from "react";

const styles = {
  navbar: {
    backgroundColor: "#000",
    color: "white",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "99%",
    position: "fixed",
    top: 0,
    margin: 0,
    border: "1px solid #000",
  },
  navLinks: {
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
  about: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    borderBottom: "1px solid #fff",
    backgroundColor: "blue",
    padding: "4rem 1rem",
    color: "#fff", 
  },
  
  projects: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    borderBottom: "1px solid #fff",
    backgroundColor: "green",
    padding: "4rem 1rem", 
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(32%, 1fr))",
    gap: "30px",
    padding: "1rem", 
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    boxSizing: "border-box",
    color: "#323232",
  },
  cardImage: {
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  demoButton: {
    backgroundColor: "#32379b",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
  },
  contact: {
    //full width of the viewport
    color: "#323232",
    padding: "20px",
    margin: "100px 50px 50px 50px",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    margin: "50px",
  },
  fieldset: {
    border: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textarea: {
    padding: "10px",
    margin: "10px",
    borderRadius: "24px",
    backgroundColor: "#ffffff10",
    width: "300px",
    color: "blue"
  },
  input: {
    padding: "10px",
    margin: "10px",
    backgroundColor: "#ffffff10",
    color: "#323232",
    width: "200px",
    borderRadius: "4px",
    border: "1px solid #b5b5b5",
  },
  select: {
    padding: "10px",
    margin: "10px",
    backgroundColor: "#ffffff10",
    color: "#323232",
    width: "220px",
    border: "1px solid #b5b5b5",
    borderRadius: "4px",
  },
  submitBtn: {
    padding: "10px",
    margin: "10px",
    borderRadius: "4px",
    backgroundColor: "#32379b",
    color: "white",
    border: "none",
    cursor: "pointer",
    width: "100px",
  },
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
  },
};

const Navbar = () => {
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
    { href: "#about", text: "About", icon: "fas fa-user" },
    { href: "#projects", text: "Projects", icon: "fas fa-project-diagram" },
    { href: "#contact", text: "Contact Me", icon: "fas fa-envelope" },
  ];

  return (
    <nav style={styles.navbar}>
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

const AboutSection = ({ id, title, icon, children }) => (
  <section style={styles.about} id={id}>
    <h2>
      <i className={icon}> {title} </i>
    </h2>
    <img src="https://source.unsplash.com/random/300x300" alt="Pete" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
    <h5>
      Hello, I am Pete!
    </h5>
    <p>
      A frontend developer specialised in React
    </p>
  </section>
);

const ProjectsSection = ({ id, title, icon, projectData }) => (
  <section style={styles.projects} id={id}>
    <h2>
      <i className={icon}>{"  " + title}</i>
    </h2>
    <div style={styles.cardContainer}>
      {projectData.map((project) => (
        <div key={project.id} className="card" style={styles.card}>
          <img src={project.imageUrl} alt={project.title} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.demoUrl} target="_blank" style={styles.demoButton}>
            See More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      ))}
    </div>
  </section>
);

const ContactSection = ({ id, title, icon, children }) => (
  <section style={styles.contact} id={id}>
    <h2>
      <i className={icon}> {title} </i>
    </h2>
    {children}
  </section>
);

const Footer = () => (
  <footer style={styles.footer}>
    <a
      href="https://daveymason.com"
      style={{ color: "white", textDecoration: "none" }}
    >
      © Davey{" "}
    </a>
  </footer>
);

const App = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    email: '',
    inquiryType: '',
    message: '',
    touched: {
      firstName: false,
      email: false,
      message: false,
    },
    validationMessages: {
      firstName: '',
      email: '',
      message: '',
    }
  });
  
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    const touched = { ...formState.touched, [name]: true };
    const validationMessages = validateField(name, value);
    
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
      touched,
      validationMessages: { ...prevState.validationMessages, ...validationMessages }
    }));
  };
  
  const validateField = (name, value) => {
    let message = '';
    switch (name) {
      case 'firstName':
        message = value ? '' : 'Required';
        break;
      case 'email':
        message = /\S+@\S+\.\S+/.test(value) ? '' : value ? 'Invalid email address' : 'Required';
        break;
      case 'message':
        message = value.length >= 25 ? '' : 'Must be at least 25 characters';
        break;
      default:
        break;
    }
    return { [name]: message };
  };
  
  const isFormValid = () => {
    return (
      formState.firstName.trim() !== '' &&
      /\S+@\S+\.\S+/.test(formState.email) && // Validates the email with a simple regex
      formState.inquiryType.trim() !== '' &&
      formState.message.length >= 25 // Ensures the message is at least 25 characters long
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Force all fields to be touched on submit
    const allTouched = {
      firstName: true,
      email: true,
      message: true
    };
  
    setFormState(prevState => ({
      ...prevState,
      touched: allTouched,
      validationMessages: {
        ...prevState.validationMessages,
        firstName: prevState.firstName ? '' : 'Required',
        email: /\S+@\S+\.\S+/.test(prevState.email) ? '' : 'Invalid email address',
        message: prevState.message.length >= 25 ? '' : 'Must be at least 25 characters'
      }
    }));
  
    // Only proceed if the form is valid
    if (isFormValid()) {
      alert(`Thanks for your submission, ${formState.firstName}!`);
      // Reset form state
      setFormState({
        firstName: '',
        email: '',
        inquiryType: '',
        message: '',
        touched: {},
        validationMessages: {}
      });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const touched = { ...formState.touched, [name]: true };
    const validationMessages = validateField(name, formState[name]);
  
    setFormState(prevState => ({
      ...prevState,
      touched,
      validationMessages: { ...prevState.validationMessages, ...validationMessages }
    }));
  };
  

  const projectData = [
    {
      id: 'pokemon-search',
      title: 'React.js - POKEMON SEARCH',
      description: 'Built using React & Netlify\'s CI/CD process, this web app calls the PokeAPI and utilizes Devexpress React Library to allow users to interact with the data.',
      imageUrl: 'https://daveymason.com/assets/img/reactPokeSearch.jpg',
      demoUrl: 'https://competent-minsky-e1c6eb.netlify.app/',
    },
    {
      id: 'ai-lesson-planner',
      title: 'Php - AI LESSON PLANNER',
      description: 'Built using CSS & Php, this Wordpress Plugin integrates with OPENAI\'s ChatGPT to generate a custom lesson plan with auto translations to enhance communication.',
      imageUrl: 'https://daveymason.com/assets/img/KinderSync.png',
      demoUrl: 'https://kindersync.com/ai-lesson-planner/',
    },
    {
      id: 'achievement-complete',
      title: 'React.js - ACHIEVEMENT COMPLETE',
      description: 'Landing page concept for an app never to be created. Developed using React, styled with MUI, and for SEO purposes, UX, UI, CSS, Javascript & other buzz words.',
      imageUrl: 'https://daveymason.com/assets/img/reactAchievementComplete.jpg',
      demoUrl: 'https://achievementcomplete.netlify.app',
    },
    {
      id: 'little-lemon',
      title: 'React.js - LITTLE LEMON - Coming soon!',
      description: 'A web app for Little Lemon Restaurant, built using React for the META Front-End Challenge. The app is currently in development and will be released soon.',
      imageUrl: 'https://daveymason.com/assets/img/WordpressPluginLinks.jpg',
      demoUrl: 'https://www.figma.com/file/0SIhiqfYThQzObX6XrdSdW/Untitled?type=design&node-id=0%3A1&mode=design&t=uFfgkE1zO7VrecIr-1',
    },
  ];
  
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div style={styles.app}>
      <Navbar />
      <AboutSection id="about" title="React Specialist" icon="fab fa-react" />
      <br />
      <ProjectsSection
        id="projects"
        title="Projects"
        icon="fas fa-project-diagram"
        projectData={projectData}
      />

      <ContactSection id="contact" title="Contact" icon="fas fa-envelope">
      <form onSubmit={handleSubmit} style={styles.form}>
  <fieldset style={styles.fieldset}>
    <label htmlFor="firstName">First Name:</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={formState.firstName}
      onChange={handleFormChange}
      onBlur={handleBlur}
      style={formState.touched.firstName && !formState.firstName ? {...styles.input, borderColor: 'red'} : styles.input}
    />
    {formState.touched.firstName && !formState.firstName && <div style={{ color: 'red' }}>Required</div>}
    
    <label htmlFor="email">Email Address:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formState.email}
      onChange={handleFormChange}
      onBlur={handleBlur}
      style={formState.touched.email && (!formState.email || !/\S+@\S+\.\S+/.test(formState.email)) ? {...styles.input, borderColor: 'red'} : styles.input}
    />
    {formState.touched.email && !formState.email && <div style={{ color: 'red' }}>Required</div>}
    {formState.touched.email && formState.email && !/\S+@\S+\.\S+/.test(formState.email) && <div style={{ color: 'red' }}>Invalid email address</div>}
    
    <label htmlFor="inquiryType">Type of Inquiry:</label>
    <select
      id="inquiryType"
      name="inquiryType"
      value={formState.inquiryType}
      onChange={handleFormChange}
      style={styles.select}
    >
      <option value="">Select an option</option>
      <option value="general">General Inquiry</option>
      <option value="support">Support</option>
      <option value="feedback">Feedback</option>
    </select>
    
    <label htmlFor="message">Your Message:</label>
    <textarea
      id="message"
      name="message"
      value={formState.message}
      onChange={handleFormChange}
      onBlur={handleBlur}
      rows={10}
      cols={50}
      style={formState.touched.message && (!formState.message || formState.message.length < 25) ? {...styles.textarea, borderColor: 'red'} : styles.textarea}
    />
    {formState.touched.message && !formState.message && <div style={{ color: 'red' }}>Required</div>}
    {formState.touched.message && formState.message && formState.message.length < 25 && <div style={{ color: 'red' }}>Must be at least 25 characters</div>}
    
    <button type="submit" style={styles.submitBtn}>Submit <i className="fas fa-paper-plane"></i></button>
  </fieldset>
</form>

      </ContactSection>
      <Footer />
    </div>
  );
};

export default App;
