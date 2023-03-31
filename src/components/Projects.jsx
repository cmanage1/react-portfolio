import React from 'react';
import { ProjectCard, ProjectStack } from './styled';

function Projects() {
  return (
    <ProjectStack direction="column" spacing={2}>
      <ProjectStack direction="row" spacing={4}>
        <ProjectCard
          title="UFC Fight Predictor"
          subheader="Machine Learning + Full Stack"
          demoImage="https://user-images.githubusercontent.com/55030581/215596284-6a93e9f8-0453-4dbd-bcdf-3cfe1ae5c11b.gif"
          description="Random Forest Classifier Model to predict UFC fight winners with 63.6% accuracy"
          techStack="Python, FastAPI, React, Pandas, sklearn"
          github="https://github.com/cmanage1/ufc-fight-predictor"
          colab="https://colab.research.google.com/drive/17iKQNxBbhu-wyfHT3-4jyK4RL7kIiuQH?usp=sharing"
        />
        <ProjectCard
          title="CS:GO Win Predictor"
          subheader="Machine Learning"
          techStack="Python, Pandas, sklearn"
          demoImage="https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427"
          description="Used Logistic Regression to predict CS:GO round wins: 69.1% accuracy"
          colab="https://colab.research.google.com/drive/1JvmxyFDS0yr2_6fEwA-kAQ0ATpeHIuex?usp=sharing"
        />
        <ProjectCard
          title="Bookbot"
          subheader="Back-End Development"
          techStack="Node.js, Puppeteer.js, JavaScript"
          demoImage="https://em-content.zobj.net/socialmedia/apple/48/robot-face_1f916.png"
          description="Books a gym slot at uOttawa Sports Services while you go to sleep 😴"
          github="https://github.com/cmanage1/BookBot"
        />
      </ProjectStack>
      <ProjectStack direction="row" spacing={4}>
        <ProjectCard
          title="Shelf-it"
          subheader="Full Stack Development"
          demoImage="https://raw.githubusercontent.com/cmanage1/shelf-it/master/__tests__/case_6.gif"
          description="A virtual bookshelf to keep track of owned books."
          github="https://github.com/cmanage1/shelf-it"
        />
        <ProjectCard
          title="Firebase Demo"
          subheader="Firebase Project"
          demoImage="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
          description="Demo for uOttawa DSC Firebase Workshop."
          github="https://github.com/cmanage1/firebase-demo"
        />
        <ProjectCard
          title="LM-genie"
          subheader="Full Stack Development"
          demoImage="https://raw.githubusercontent.com/cmanage1/lm-genie/master/test_gifs/demo.gif"
          description="(OLD) An application that matches a Law/Med school for a user"
          github="https://github.com/cmanage1/lm-genie"
        />
      </ProjectStack>
    </ProjectStack>
  );
}

export default Projects;
