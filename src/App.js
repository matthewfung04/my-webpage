import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
      </nav>
      <header className="App-header" id="home">
        <p className="Intro-text">Hello! My name is</p>
        <h1>Matthew Fung</h1>
      </header>
      <section className="About" id="about">
        <h2>About Me</h2>
        <p>This is the about me section where you can write a brief introduction about yourself.</p>
      </section>
      <section className="Projects" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Description of project 1.</li>
          <li>Project 2: Description of project 2.</li>
          <li>Project 3: Description of project 3.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
