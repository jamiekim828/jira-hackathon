import { Box, Divider, Typography, IconButton } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHook";
import { useAppDispatch } from "../hooks/reduxHook";
import { fetchAllProjects } from "../redux/projectReducer";
import { deleteProject } from "../redux/projectReducer";
import { deleteItem } from "../redux/projectReducer";

import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { Project } from "../types/ProjectTypes";

// const projectsList: Project[] = []
const projectsList: Project[] = [
  {
    projectName: "Kirk Jones",
    creator: "creator 1",
    projectType: ["Frontend "],
    createdAt: "2023-01-31T04:28:01.272Z",
    releaseDate: "2023-11-28T03:36:57.695Z",
    id: "1",
    status: ["created"],
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
        status: ["inProgress"],
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
        status: ["inProgress"],
      },
    ],
  },
  {
    projectName: "Amanda Nitzsche",
    creator: "creator 2",
    projectType: ["AWS"],
    createdAt: "2023-01-30T22:14:56.099Z",
    releaseDate: "2023-10-23T05:10:13.334Z",
    id: "2",
    status: ["finished"],
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
        status: ["finished"],
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
        status: ["finished"],
      },
    ],
  },
  {
    projectName: "Steven Grady",
    creator: "creator 3",
    projectType: ["Backend"],
    createdAt: "2023-01-30T21:03:16.912Z",
    releaseDate: "2023-10-20T20:06:57.170Z",
    id: "3",
    status: ["inProgress"],
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
        status: ["inProgress"],
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
        status: ["inProgress"],
      },
    ],
  },
];

const ProjectItem = ({ project }: any) => {
  const dispatch = useAppDispatch();
  const deleteFromProject = () => {
    dispatch(deleteProject(project.id));
    dispatch(deleteItem(project.id));
  };
  return (
    <Box
      style={{
        width: "230px",
        minWidth: "100%",
        marginBottom: "1rem",
        backgroundColor: "white",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        border: "1px solid #E9ECEF",
        overflow: "hidden",
      }}
    >
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to={`/projects/${project.id}`}
        id={project.id}
      >
        <Box
          sx={{
            p: "0 1rem",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#003049",
          }}
        >
          <Typography variant="h2" color="white" fontSize="1.3rem">
            {project.projectName}
          </Typography>
          <Typography
            variant="h3"
            color="white"
            fontSize="1.2rem"
            marginBottom="1rem"
          >
            {project.projectType[0]}
          </Typography>
        </Box>
        <Divider
          orientation="horizontal"
          sx={{
            border: "solid 2px  #003049",
            m: "1rem 2rem",
          }}
        />
        <Box sx={{ p: "1rem" }}>
          <Typography fontSize="1.2rem">
            <span>created: </span>
            {project.createdAt.slice(0, 10)}
          </Typography>
          <Typography fontSize="1.2rem">
            <span>release: </span>
            {project.createdAt.slice(0, 10)}
          </Typography>
        </Box>
      </Link>
      <IconButton
        sx={{ color: "grey", margin: "0 0 0.2rem auto" }}
        // onClick={() => handleDelete(project.id)}
      >
        <DeleteForeverIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
    </Box>
  );
};

export default function ProjectsList() {
  const notStartedProjects =
    projectsList.filter((project) => project.status[0] === "created") || [];
  const inProgressProjects =
    projectsList.filter((project) => project.status[0] === "inProgress") || [];
  const finishedProjects =
    projectsList.filter((project) => project.status[0] === "finished") || [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);
  const projectList = useAppSelector((item) => item.projectReducer);

  return (
    <Box
      sx={{
        display: "block",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "0 2rem 1.5rem",
        }}
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          fontSize="2rem"
          color="#bec8d1"
        >
          PROJECTS LIST
        </Typography>
        <IconButton onClick={() => console.log("createNewProject")}>
          <AddCircleOutlineOutlined
            sx={{ color: "#bec8d1", fontSize: "1.8rem" }}
          />
        </IconButton>
      </Box>
      {projectsList.length > 0 ? (
        <Grid container spacing={3}>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "1rem 0.3rem",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                fontSize="1.5rem"
                color="#003049"
                marginBottom="1rem"
              >
                CREATED
              </Typography>
              {notStartedProjects.length > 0 &&
                notStartedProjects.map((project: Project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "1rem 0.3rem",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                fontSize="1.5rem"
                color="#003049"
                marginBottom="1rem"
              >
                IN PROGRESS
              </Typography>
              {inProgressProjects.length > 0 &&
                inProgressProjects.map((project: Project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "1rem 0.3rem",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                fontSize="1.5rem"
                color="#003049"
                marginBottom="1rem"
              >
                FINISHED
              </Typography>
              {finishedProjects.length > 0 &&
                finishedProjects.map((project: Project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="subtitle1" marginTop="2rem">
          Please add a project to the DashBoard.
        </Typography>
      )}
    </Box>
  );
}
