import { Box, Stack } from "@mui/material";
import React from "react";
import { CustomCard } from "./styled";
import macadamianLogo from "../images/macadamian_logo.jpeg";
import uOttawaRedLogo from "../images/uottawa_logo.png";
import DFMLogo from "../images/dfm_logo.jpeg";
import CBNLogo from "../images/cbn_logo.png";

function Experience() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ typography: "body2" }}>* Most recent to least</Box>
      <Stack spacing={4}>
        <CustomCard
          mainTitle="University of Ottawa - IT, Web Services"
          date="Jan 2023 - Present"
          secondaryTitle="Jr. Systems Developer (Part-Time)"
          location="Ottawa, ON"
          listDescription={[
            "Maintaining web server systems within University of Ottawa IT using Docker and Kubernetes.",
            "Revising web applications to serve a 47,000 university populace using React and PHP",
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
            "Developed front-end features using React for Macadamian’s elemedicine app used by 9 Ontario clinics.",
            "Improved customer satisfaction by 10% through surveys and meetings which discuss product feedback.",
            "Participated in daily SCRUM meetings with 4 other engineers to discuss bi-weekly Sprint progress.",
            "Used Git and Azure DevOps to collaborate and contribute to various project pipelines.",
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
            "Rebuilt an existing internal API from SOAP to REST for a 3x decrease in server resources.",
            "Developed the REST API using Python and Flask and deployed it to production with a 99.9% uptime.",
            "Documented 350 lines of debugging instructions, test reports, and method descriptions to Confluence.",
            "Utilized bash terminal tools to troubleshoot various problems within Linux servers.",
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
            "Designed a unit testing framework using Jest.js to add 73% code coverage for the department’s website.",
            "Implemented 11 new features to the department’s e-learning website using React and Redux.",
            "Used Jira collaboration tools to build software with a team in Sprints following Agile methodologies.",
            "Modified existing low-cohesion code for faster feature development in future software iterations.",
          ]}
          logo={DFMLogo}
          logoAlt="DFM Logo"
        />
      </Stack>
    </Box>
  );
}

export default Experience;
