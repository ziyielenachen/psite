import React, { Component } from 'react';
import './Projects.css';
import Project from './Project.js';

import dpr from "./dpr.png";
import data8 from "./data8.png";
import p5 from "./p5.png";

class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="projects">
          {/* <h2 className="Project-header">PROJECTS</h2> */}
          <div className="Project-container">

            <a target="_blank"><Project
              projecttitle="Construction Light"
              description="
              Coordinated with DPR Construction company in creating a convenient work 
              light system with logistics tracking ability to enhance worksite efficiency."
              image={dpr}
              alt="dpr"/></a>

            <a target="_blank"><Project
              projecttitle="Movie Classifier"
              description="Developed a k-nearest-neighbors classier using Python on Jupyter.
              The classifier can guess whether a movie belongs to romance or 
              action genre using only the numbers of times words appear in the 
              movies's screenplay.
              Tested the classifier on data and showed an accuracy of 73%."
              image={data8}
              alt="data8"/></a>

            <a href="https://ziyielenachen.github.io/p5_project/" target="_blank"><Project
              projecttitle="
              

              
              Random Decision Generator"
              description="
              Built a fun random decision generator using P5 and Javascript (for indecisive
                people like me ;) )"
              image={p5}
              alt="p5"/></a>

          </div>
        </div>
    );
  }
}

export default Projects;