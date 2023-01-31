import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

export interface Project {
  createdAt: string;
  projectName: string;
  task: any[];
  creator: string;
  projectType: any[];
  releaseDate: number;
  id: string;
  status: string[];
}
type Prop = {
  project: Project;
};
const ProjectItem = ({ project }: Prop) => {
  return (
    <ListItem sx={{ flexBasis: "30%", hight: "600px", m: "0"}}>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to={`/projects/${project.id}`}
      >
        <Box
          style={{
            backgroundColor:"white" ,
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
          sx={{
            border: "1px solid #E9ECEF",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            alt="picture of project"
            src="https://news.blr.com/app/uploads/sites/3/2019/10/Team-project.jpg"
            height="50%"
            width="300px"
            sx={{ objectFit: "cover" }}
          ></Box>
          <Divider
            orientation="horizontal"
            sx={{
              border: "solid 2px  #003049",
              m: "0 2rem",
            }}
          />
          <Box sx={{ p: "1rem" }}>
            <Typography variant="h2" color="#003049" fontSize="1.3rem">
              {project.projectName}
            </Typography>
            <Typography variant="h3" fontSize="1.2rem" marginBottom="1rem">
              {project.projectType[0]}
            </Typography>
            <Typography fontSize="1.2rem">
              <span>created: </span>
              {project.createdAt.slice(0, 10)}
            </Typography>
            <Typography fontSize="1.2rem">
              <span>release: </span>
              {project.createdAt.slice(0, 10)}
            </Typography>
          </Box>
        </Box>
      </Link>
    </ListItem>
  );
};


export default function ProjectsList() {
  const projects: Project[]= useSelector((state:RootState)=> state.projectReducer)
  const notStartedProjects =
    projects.filter((project) => project.status[0] === "created") || [];
  const inProgressProjects =
    projects.filter((project) => project.status[0] === "inProgress") || [];
  const finishedProjects =
    projects.filter((project) => project.status[0] === "finished") || [];

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={4}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontSize="1.5rem"
            color="#003049"
            textAlign="center"
          >
            TO DO
          </Typography>
          <List>
            {notStartedProjects.length > 0 &&
              notStartedProjects.map((project: Project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
          </List>
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
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontSize="1.5rem"
            color="#003049"
            textAlign="center"
          >
            IN PROGRESS
          </Typography>
          <List
            sx={{
              display: "flexColumn",
              flexWrap: "wrap",
            }}
          >
            {inProgressProjects.length > 0 &&
              inProgressProjects.map((project: Project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
          </List>
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
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontSize="1.5rem"
            color="#003049"
            textAlign="center"
          >
            FINISHED
          </Typography>
          <List
            sx={{
              display: "flexColumn",
              flexWrap: "wrap",
            }}
          >
            {finishedProjects.length > 0 &&
              finishedProjects.map((project: Project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
}
