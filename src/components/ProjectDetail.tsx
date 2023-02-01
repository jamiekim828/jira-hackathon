import React, { useEffect, useState } from 'react';
import {
  Card,
  Collapse,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useParams } from 'react-router-dom';

import { ProjectType } from '../types/ProjectType';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Button from '@mui/material/Button';

import fetchOneProject from '../redux/projectDetailReducer';
import { AppDispatch } from '../redux/store';
import CreateTask from './CreateTask';

type Params = {
  projectId: string;
};
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

export default function ProjectDetail() {
  const project: ProjectType = useSelector(
    (state: RootState) => state.detailReducer.projectDetail
  );
  console.log(project, 'project');

  const dispatch = useDispatch<AppDispatch>();
  const [expanded, setExpanded] = useState(false);

  const { projectId } = useParams<Params>();
  useEffect(() => {
    dispatch(fetchOneProject(projectId));
  }, [dispatch, projectId]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  function addTaskHandler(project: ProjectType) {
    return <CreateTask/>
  }
  return (
            <div>
              <Card sx={{ mxWidth: 345 }}>
                <CardHeader
                  title={project.projectName}
                />
                <CardContent>
                  <Typography>
                    Created by {project.creator}
                  </Typography>
                  <Typography>
                    Tasks of the Project
                    {project.task.map((task) => {
                      return (
                        <ul>
                          <li>
                            <Link to={`./task/${task.id}`}> {task.name}</Link>
                          </li>
                        </ul>
                      );
                    })}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant='contained'
                    onClick={() => {
                      addTaskHandler(project);
                    }}
                  >
                    Add task
                  </Button>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{project.description}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>      
  );
}
