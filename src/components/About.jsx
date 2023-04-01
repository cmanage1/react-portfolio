import { Box, Card, Stack } from '@mui/material';
import React from 'react';
import { CustomCard, SkillsList } from './styled';
import uOLogo from '../images/uottawa_logo.png';

function About() {
  return (
    <Stack spacing={4}>
      <Box>
        <Box sx={{ typography: 'h5' }}>Hello 👋 </Box>
        <Card sx={{ padding: '20px' }}>
          <Box sx={{ typography: 'body1' }}>
            I&apos;m a software developer based in Toronto and
            recent graduate with Honours in Computer Science.
            <br />
            <br />
            I have significant experience building large-scale user
            interfaces using
            {' '}
            <b>React.js</b>
            {' '}
            and developing complex
            {' '}
            <b>Python</b>
            {' '}
            server systems.
            I&apos;m also interested Artificial Intelligence and Machine Learning
            using classification models.

            <br />
            <br />
            My inbox is always open so feel free to contact me whenever :)
          </Box>
        </Card>
      </Box>
      <Box>
        <Box sx={{ typography: 'h5' }}>Skills 🎯</Box>
        <Card sx={{ padding: '20px' }}>
          <Stack spacing={1}>
            <Box>
              <Box sx={{ typography: 'h6' }}>Languages:</Box>
              <SkillsList
                skills={[
                  'Python',
                  'TypeScript',
                  'JavaScript',
                  'C/C++',
                  'Java',
                  'Go',
                  'bash',
                ]}
              />
            </Box>
            <Box>
              <Box sx={{ typography: 'h6' }}>Frameworks:</Box>
              <SkillsList skills={['React', 'Flask', 'FastAPI', 'Node.js']} />
            </Box>
            <Box>
              <Box sx={{ typography: 'h6' }}>Developer Tools:</Box>
              <SkillsList
                skills={[
                  'Linux',
                  'Git',
                  'Docker',
                  'Redis',
                  'Jira',
                  'PostgreSQL',
                  'Kubernetes',
                  'Azure',
                ]}
              />
            </Box>
            <Box>
              <Box sx={{ typography: 'h6' }}>Libraries:</Box>
              <SkillsList skills={['Pandas', 'NumPy', 'Lodash', 'Axios']} />
            </Box>
          </Stack>
        </Card>
      </Box>
      <Box container>
        <Box sx={{ typography: 'h5' }}>Education ‍🎓</Box>
        <CustomCard
          mainTitle="University of Ottawa"
          date="Sept 2018 – Apr. 2023"
          secondaryTitle="Honours Bachelor of Science Major Computer Science, Minor in Psychology"
          location="Ottawa, ON"
          plainDescription={[
            <b>Courses: </b>,
            'Intro to Artificial Intelligence, Software Design and Architecture, Data Structures and Algorithms, Probabilities and statistics, Databases, Design and Analysis of Algorithms',
          ]}
          logo={uOLogo}
          logoAlt="uOttawa Logo"
        />
      </Box>
    </Stack>
  );
}

export default About;
