import { Box, Typography } from "@mui/material";
import React from "react";

import ProjectList from "../components/ProjectsList";

interface Project {
  createdAt: string;
  projectName: string;
  task: string[];
  creator: string;
  projectType: string[];
  releaseDate: number;
  id: string;
}

// EXAMPLE of response from backend
const projectsList: Project[] = [
  {
    createdAt: "2023-01-29T16:17:01.690Z",
    projectName: "Kay Jakubowski DDS",
    task: [],
    creator: "creator 1",
    projectType: [],
    releaseDate: 1675091718,
    id: "1",
  },
  {
    createdAt: "2023-01-29T17:38:18.042Z",
    projectName: "Elsa Gislason",
    task: [],
    creator: "creator 2",
    projectType: [],
    releaseDate: 1675091658,
    id: "2",
  },
  {
    createdAt: "2023-01-30T11:20:13.329Z",
    projectName: "Miss Nathan Carroll",
    task: [],
    creator: "creator 3",
    projectType: [],
    releaseDate: 1675091598,
    id: "3",
  },
];

export default function ProjectsList() {
  return (
    <Box width="100%" height="100%">
      {projectsList.length > 0 ? (
        <ProjectList projects={projectsList} />
      ) : (
        <Box
          height="100vh"
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Please add a project to the DashBoard.</Typography>
        </Box>
      )}
    </Box>
  );
}
