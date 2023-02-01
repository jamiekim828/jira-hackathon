import React from "react";
import {Card,Collapse, CardHeader, CardContent, CardActions, IconButton, Typography, Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import  { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom'

import { ProjectType } from "../types/ProjectType";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Button from "@mui/material/Button";
import TasksList from "./TasksList";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
export default function ProjectDetail(){
    const projectDetail: ProjectType[] = useSelector((state: RootState)=> state.projectReducer)
    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = () => {
            setExpanded(!expanded);
          };
    function addTaskHandler(){

    }
    return (
      <>
        <div>
          {projectDetail.map((project) => {
            return (
              <div>
                <Card sx={{ mxWidth: 345 }}>
                  <CardHeader
                    title={project.name}
                    subheader={project.creator}
                  />
                  <CardActions>
                    <CardActions>
                      {project.tasks.map((task) => {
                        return (
                          <Link to={`./project/task/${task.id}`}>
                            {" "}
                            {task.name}
                          </Link>
                        );
                      })}
                    </CardActions>
                    <Button variant="contained" onClick={addTaskHandler}>
                      Add task
                    </Button>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{project.description}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            );
          })}
        </div>
        <TasksList />
      </>
    );
}
