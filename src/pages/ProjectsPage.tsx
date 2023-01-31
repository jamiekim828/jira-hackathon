import { Box, Typography } from "@mui/material";
import React from "react";

import ProjectList from "../components/ProjectsList";
import {Project} from "../types/ProjectTypes";

// EXAMPLE of response from backend
// const projectsList: Project[] =[]
const projectsList: Project[] = [
  {
    projectName: "Kirk Jones",
    creator: "creator 1",
    projectType: [],
    createdAt: "2023-01-31T04:28:01.272Z",
    releaseDate: "2023-11-28T03:36:57.695Z",
    id: "1",
    task: [
      {
        name: "name 1",
        description: "description 1",
        doerId: 72,
        comments: [],
        createdAt: "2023-01-30T23:54:15.394Z",
        dueDate: "2023-05-09T03:48:55.352Z",
        id: "1",
        projectId: "1",
      },
      {
        name: "name 27",
        description: "description 27",
        doerId: 63,
        comments: [],
        createdAt: "2023-01-31T01:55:40.234Z",
        dueDate: "2023-12-21T05:00:10.752Z",
        id: "27",
        projectId: "1",
      },
    ],
  },
  {
    projectName: "Amanda Nitzsche",
    creator: "creator 2",
    projectType: [],
    createdAt: "2023-01-30T22:14:56.099Z",
    releaseDate: "2023-10-23T05:10:13.334Z",
    id: "2",
    task: [
      {
        name: "name 2",
        description: "description 2",
        doerId: 36,
        comments: [],
        createdAt: "2023-01-31T00:13:33.839Z",
        dueDate: "2023-11-02T08:22:34.634Z",
        id: "2",
        projectId: "2",
      },
      {
        name: "name 28",
        description: "description 28",
        doerId: 71,
        comments: [],
        createdAt: "2023-01-31T02:57:43.356Z",
        dueDate: "2023-05-19T07:39:34.890Z",
        id: "28",
        projectId: "2",
      },
    ],
  },
  {
    projectName: "Steven Grady",
    creator: "creator 3",
    projectType: [],
    createdAt: "2023-01-30T21:03:16.912Z",
    releaseDate: "2023-10-20T20:06:57.170Z",
    id: "3",
    task: [
      {
        name: "name 3",
        description: "description 3",
        doerId: 69,
        comments: [],
        createdAt: "2023-01-30T09:09:44.194Z",
        dueDate: "2023-06-08T05:40:14.738Z",
        id: "3",
        projectId: "3",
      },
      {
        name: "name 29",
        description: "description 29",
        doerId: 82,
        comments: [],
        createdAt: "2023-01-30T08:34:25.791Z",
        dueDate: "2023-02-08T11:32:26.722Z",
        id: "29",
        projectId: "3",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <Box width="100%" height="100%">
      <Box margin="0 auto" justifyContent="center" alignItems="center">
        <Typography
          variant="h1"
          fontWeight="bold"
          fontSize="2rem"
          color="#bec8d1"
        >
          Project List
        </Typography>
      </Box>
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
