import React, { useState } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from './ImageCarousel';
import './Projects.css'; 
import Footer from './Footer'

const skills = [
  "Programming Languages: C/C++, Java, Python, JavaScript",
  "Developer Tools: Git, Vim, VS Code, Visual Studio, IntelliJ, React",
  "Software: Microsoft Office Suite, MATLAB, SolidWorks"
];

const projects = [
  {
    title: "Pianobot",
    description: "Pianobot is a robot designed to be able to play the piano, integrating a universal enjoyment of music into engineering. As a software developer on the project, I helped modify the system to use 4 fewer fingers, while still maintaining the previous functionality, improved test suite to catch boundary cases, and added code to allow the device to move on a track so the full set of 88 keys can be played.",
    image: "/pianobot_image.png",
    modalImage: "/pianobot_image.png", 
    languages: ["C", "Python"],
    link: "https://openrobotics.ca/Pianobot"
  },
  {
    title: "Internet of Things",
    description: "This was a course project, where we designed an Internet of Things (IOT) using Java. Per Wikipedia, an \"Internet of things describes devices with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet or other communication networks.\" In this project I learned how to use various programming concepts such as object oriented, socket, and multi-threaded programming.",
    image: "/iot_image.png",
    modalImage: "/iot_image.png",
    languages: ["Java"],
  },
  {
    title: "Flooding Simulation",
    description: "This was another course project where we simulated the flooding of a terrain using of adjacency matrices and adjacency lists. Many different algorithm types were utilised, including Dijkstra's algorithm.",
    image: "flooding.png",
    modalImage: "/flooding_simulation.png",
    languages: ["Java"],
  },
  {
    title: "RISC",
    description: "The Reduced Instruction Set Computer (RISC) is a simple computation device that can complete a small set of instructions. This was made using verilog, tested on Quartus, and run on a DE1-SoC board.",
    image: "computerChip.png",
    modalImage: "/de1soc.jpg",
    languages: ["Verilog", "ModelSim", "Quartus"],
  },
  {
    title: "Serenity",
    description: "Serenity is a web app dedicated to comprehensive stress relief. It combines various features tailored to address the specific needs of users navigating the challenges of academic life. From offering a curated collection of healthy recipes to interactive breathing exercises and Pomodoro timers for focused studying, Serenity serves as an all-in-one stress relief companion. The web app is designed to create a calming environment and promote overall wellness through a seamless, user-friendly interface built with React JavaScript and CSS.",
    image: "/serenity.png",
    modalImage: "/groupPic.jpg",
    languages: ["C", "Arduino Board"],
    link: "https://bit.ly/4dOqfmK",
  },
  {
    title: "Hand of Hephaestus (Autonomous Claw)",
    description: "This was made in a first-year engineering design course. The objective was to design a claw to autonomously pick up and transport objects from pre-defined locations, as well as have enough maneuverability to stack various block shapes. Our team was able to transport all the provided items and achieved the maximum possible score.",
    image: "/claw.png",
    modalImage: "/claw.png",
    languages: ["C", "Arduino Board", "SolidWorks"],
    link: "https://bit.ly/3XgoNma",
    videoUrl: "https://www.youtube.com/embed/RS-yJ98bSLM?si=6kf6D-wbL6HFuL7x",
    videoPoster: "/claw_thumbnail.png"
  }
];

const courses = [
  {
    title: "APSC 160: Introduction to Computation in Engineering Design",
    description: "Analysis and simulation, laboratory data acquisition and processing, measurement interfaces, engineering tools, computer systems organization, programming languages."
  },
  {
    title: "CPEN 211: Introduction to Microcomputers",
    description: "Boolean algebra; combinational and sequential circuits; organization and operation of microcomputers, memory addressing modes, representation of information, instruction sets, machine and assembly language programming, systems programs, I/O structures, I/O interfacing and I/O programming, introduction to digital system design using microcomputers."
  },
  {
    title: "CPEN 212: Computing Systems II",
    description: "Abstractions that support program execution on a modern computing system. Virtualization and indirection, dynamic dispatch, hardware and operating system abstractions, program structure, memory structure and management, concurrency, and interconnects."
  },
  {
    title: "CPEN 221: Software Construction I",
    description: "Design, implementation, reasoning about software systems: abstraction and specification of software, testing, verification, abstract data types, object-oriented design, type hierarchies, concurrent software design.",
  },
  {
    title: "CPEN 320: Software Construction II",
    description: "Contemporary concepts and techniques for developing interactive software applications: client-server architectures; sessionoriented systems; security and scalability; models of application deployment.",
  },
  {
    title: "CPEN 321: Software Engineering",
    description: "Engineering practices for the development of non-trivial software-intensive systems including specification, software design, implementation, verification and validation.",
  },
  {
    title: "CPEN 331: Operating Systems",
    description: "Introduction to operating systems, their design and their implementation. Process concurrency, synchronization, communication and scheduling.",
  },
  {
    title: "CPEN 391: Computer Systems Design Studio II",
    description: "Design and implementation of a hardware platform and software design and implementation at the operating system and application layers. Project management skills. Effective presentations.",
  },
  {
    title: "CPSC 221: Basic Algorithms and Data Structures",
    description: "Design and analysis of basic algorithms and data structures; algorithm analysis methods, searching and sorting algorithms, basic data structures, graphs and concurrency.",
  },
  {
    title: "CPSC 304: Introduction to Relational Databases",
    description: "Overview of relational database systems, logical database design, E-R models, formal relational query languages, SQL, functional dependencies, normalization, formal relational query languages.",
  },
  {
    title: "CPSC 320: Intermediate Algorithm Design and Analysis",
    description: "Systematic study of basic concepts and techniques in the design and analysis of algorithms, illustrated from various problem areas. Topics include: models of computation; choice of data structures; graph-theoretic, algebraic, and text processing algorithms.",
  },
  {
    title: "ELEC 331: Computer Communications",
    description: "Analysis, design and implementation of computer networks and their protocols. Application layer protocols, transmission control protocol (TCP), Internet protocol (IP), routing algorithms, reliable data transfer, multiple access, Ethernet.",
  },
];

function App() {
  const renderSkills = () => {
    return skills.map((skill, index) => <li key={index}>{skill}</li>);
  };

  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    const offset = 100; // Nav bar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const [openCourse, setOpenCourse] = useState(null);

  const toggleCourse = (index) => {
    setOpenCourse(openCourse === index ? null : index);
  };

  function toggleNav() {
    const navLinks = document.querySelector('.App-nav-links');
    navLinks.classList.toggle('show');
  }

  return (
    <div className="App">
    
      {/* Nav Bar */}
      <nav className='App-nav'>
        <img src="/logo.png" alt="Logo" className="App-logo" />
        <button className="nav-toggle" onClick={toggleNav}>☰</button>
        <div className="App-nav-links">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Me</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#courses" onClick={(e) => handleNavClick(e, 'courses')}>Courses</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Me</a>
        </div>
      </nav>
    
      {/* Header */}
      <header className="App-header" id="home">
        <div className="header-content">
          <div className="header-text">
            <p className="Intro-text">Hello! My name is </p>
            <h1 className="name">Matthew Fung</h1>
          </div>
          <ImageCarousel />
        </div>
      </header>

      {/* About Me */}
      <section className="About" id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <img src="/headshot.jpg" alt="Matthew Fung" className="about-image" />
          <div className="about-text-group">
            <div className="about-text">
              <p>Hello! My name is Matthew Fung, and I am currently a Computer Engineering student at the University of British Columbia. I am passionate about developing innovative solutions and using technology to improve everyday life.</p>
              <p>Here are some of the skills I've gained in my studies:</p>
              <ul className="skills-list">{renderSkills()}</ul>
              <p>Outside of my academic and professional life, I am an avid reader and enjoy playing chess puzzles. Born and raised in Vancouver, Canada, I am also big fan of the Canucks!</p>
              <p>Feel free to connect with me on LinkedIn or follow my projects on GitHub!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="Projects" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-thumbnail" onClick={() => handleClick(project)}>
              <div className="project-overlay">
                <p>{project.title}</p>
              </div>
              <img src={project.image} alt={project.title} onError={(e) => e.target.src = '/default_image.jpg'} />
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <div className="project-modal" role="dialog" aria-labelledby="modalTitle" aria-modal="true">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h3 id="modalTitle">{selectedProject.title}</h3>
            <div className="modal-body">
              <img src={selectedProject.modalImage} alt={selectedProject.title} className="modal-image" onError={(e) => e.target.src = '/default_image.jpg'} />
              <div className="modal-text-video">
                <p>{selectedProject.description}</p>
                {/* Video if it exists */}
                {selectedProject.videoUrl && (
                  <div className="video-container">
                    <iframe src={selectedProject.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                )}
                {/* Link if it exists */}
                {selectedProject.link && (
                  <p>
                    For more details:&nbsp;
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      {selectedProject.link}
                    </a>
                  </p>
                )}
              </div>
            </div>
            <div className="modal-languages">
              <strong>Languages and Tool(s):</strong> {selectedProject.languages.join(', ')}
            </div>
          </div>
        </div>
      )}

      {/* Courses */}
      <section className="Courses" id="courses">
      <h2>Courses I Have Taken</h2>
        <div className="courses-list">
          {courses.map((course, index) => (
            <div key={index} className="course-item">
              <button className="course-title" onClick={() => toggleCourse(index)}>
                <span className={`triangle ${openCourse === index ? 'open' : ''}`}>&#9662;</span> {/* Triangle */}
                {course.title}
              </button>
              {/*When Closed*/}
              {openCourse === index && (
                <div className="course-description">
                  {course.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
