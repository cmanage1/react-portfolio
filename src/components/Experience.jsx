import { Box, Link, Stack } from '@mui/material';
import React from 'react';
import { CustomCard } from '../style/styled';
import macadamianLogo from '../images/macadamian_logo.jpeg';
import uOttawaRedLogo from '../images/uottawa_logo.png';
import DFMLogo from '../images/dfm_logo.jpeg';
import CBNLogo from '../images/cbn_logo.png';

function Experience() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={4}>
        <CustomCard
          mainTitle="University of Ottawa - IT, Web Services"
          date="Jan 2023 - Apr. 2023"
          secondaryTitle="Jr. Systems Developer (Part-Time)"
          location="Ottawa, ON"
          listDescription={[
            'Enhanced the performance and security of an Authentication Reset tool for a diverse university community of over 50,000 by implementing updates using React, Express.js, and Node.js.',
            'Assisted the migration of 315 uOttawa.ca subdomains by implementing various features in Drupal, PHP, and JavaScript to improve user experience and accessibility.',
          ]}
          logo={uOttawaRedLogo}
          logoAlt="uOttawa Logo"
        />
        <CustomCard
          mainTitle="Macadamian Technologies"
          date="Jan 2022 – Apr. 2022"
          secondaryTitle="Software Developer (CO-OP)"
          location="Gatineau, QC"
          listDescription={[
            'Constructed and delivered front-end features using React and TypeScript for Macadamian’s InQ Telehealth Solution, which was utilized by 9 Canadian clinics during development and later acquired by Emids, a leading global player in the Medical Technology industry.',
            'Spearheaded the design and development of the instant messaging notification service within InQ using Twilio and Lisp-powered internal tools.',
            <Link color="secondary" target="__blank" rel="noopener noreferrer" href="https://www.emids.com/offerings/platforms/healthconnect/inq-digital-front-door/">
              project link
            </Link>,
          ]}
          logo={macadamianLogo}
          logoAlt="Macadamian Logo"
        />
        <CustomCard
          mainTitle="Canadian Bank Note Company - Lotteries"
          date="May 2021 – Dec. 2021"
          secondaryTitle=" Jr. Systems Administrator (CO-OP)"
          location="Ottawa, ON"
          listDescription={[
            'Engineered a high-performing REST API using Python and Flask with Redis caching for Transport Layer Security operations, achieving an exceptional 99.999% uptime on a Linux Server in production.',
            'Significantly reduced server resources by 3x compared to the previous SOAP API implementation.',
          ]}
          logo={CBNLogo}
          logoAlt="CBN Logo"
        />
        <CustomCard
          mainTitle="University of Ottawa - Department of Family Medicine"
          date="Sep. 2020 – Apr. 2021"
          secondaryTitle="Software Engineer Intern (Part-Time)"
          location="Ottawa, ON"
          listDescription={[
            'Designed and launched 11 new features to enhance the department’s e-learning applications using React and Redux, which were successfully deployed for production, resulting in improved stakeholder satisfaction.',
            'Established unit testing procedure using Jest.js to achieve an impressive 70% code coverage within 2 months of the project start date.',
          ]}
          logo={DFMLogo}
          logoAlt="DFM Logo"
        />
      </Stack>
    </Box>
  );
}

export default Experience;
