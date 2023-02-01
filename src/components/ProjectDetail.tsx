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

import TasksList from './TasksList';

import fetchOneProject from '../redux/projectDetailReducer';
import { AppDispatch } from '../redux/store';

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
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [creator, setCreator] = useState('');
  const [description, setDescription] = useState('');
  const { projectId } = useParams<Params>();
  useEffect(() => {
    dispatch(fetchOneProject(projectId));
  }, [dispatch, projectId]);

  const temp = {
    id: id,
    name: name,
    creator: creator,
    description: description,
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function idHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setId(Number(event.target.value));
  }
  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function creatorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCreator(event.target.value);
  }
  function descriptionHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }
  function saveHandler(project: ProjectType) {
    project.task.push(temp);
  }
  function addTaskHandler(project: ProjectType) {
    return (
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <div>
          <TextField
            required
            id='outlined-number'
            label='Task Id'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            onChange={idHandler}
          />
          <TextField
            required
            id='outlined-required'
            label='enter name of the task'
            defaultValue=''
            onChange={nameHandler}
          />
          <TextField
            required
            id='outlined-required'
            label='enter name of the creator'
            defaultValue=''
            onChange={creatorHandler}
          />
          <TextField
            id='outlined-multiline-flexible'
            label='write here description of the project'
            multiline
            maxRows={5}
            onChange={descriptionHandler}
          />
          <Button
            variant='contained'
            onClick={() => {
              saveHandler(project);
            }}
          >
            Save
          </Button>
        </div>
      </Box>
    );
  }
  return (
    <>
      <div>
        {/* {projectDetail.map((project) => {
          return (
            <div>
              <Card sx={{ mxWidth: 345 }}>
                <CardHeader
                  title={project.projectName}
                  subheader={project.creator}
                />
                <CardContent>
                  <Typography>
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
                  <CardActions>
                    {project.tasks.map((task) => {
                      return (
                        <Link to={`./project/task/${task.id}`}>
                          {' '}
                          {task.name}
                        </Link>
                      );
                    })}
                  </CardActions>
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
        })} */}
      </div>
      <TasksList />
    </>
  );
}
