import { Box, Stack } from '@mui/material';
import React from 'react';
import { CustomCard, Item, SkillsList } from '../style/styled';
import uOLogo from '../images/uottawa_logo.png';

function About() {
  return (
    <Stack spacing={4}>
      <Box>
        <Box sx={{ typography: 'h5' }}>🎯 Skills </Box>
        <Item sx={{ padding: '20px' }}>
          <Stack spacing={1}>
            <Box>
              <Box sx={{ typography: 'h6' }}>Languages:</Box>
              <SkillsList
                skills={[
                  'Python',
                  'TypeScript',
                  'JavaScript',
                  'C/C++',
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
                  'RHEL Linux',
                  'Git',
                  'Docker',
                  'Redis',
                  'Jira',
                  'PostgreSQL',
                  'Kubernetes',
                  'AWS EC2',
                ]}
              />
            </Box>
            <Box>
              <Box sx={{ typography: 'h6' }}>Libraries:</Box>
              <SkillsList skills={['Pandas', 'NumPy', 'Lodash', 'Matplotlib', 'scikit-learn']} />
            </Box>
          </Stack>
        </Item>
      </Box>
      <Box>
        <Box sx={{ typography: 'h5' }}> 🎓 Education ‍</Box>
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
