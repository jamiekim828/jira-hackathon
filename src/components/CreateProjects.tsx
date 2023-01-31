import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { AppDispatch, RootState } from '../redux/store';
import { fetchAllUsers } from '../redux/userReducer';
import Dropdown from './Dropdown';
import { projectReducer } from '../redux/projectReducer';
import { useNavigate } from 'react-router-dom';

type NewProject = {
  id: number;
  projectName: string;
  creator: string | null;
  task: string[];
  description: string;
};
export default function CreateProjects() {
  const users = useSelector((state: RootState) => state.userReducer);

  const [projectName, setProjectName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [assignedUser, setAssignedUser] = useState<string | null>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };
  const handleDescriptionChange = (article: string) => {
    setDescription(article);
  };

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [newProject, setNewProject] = useState<NewProject>({
    id: 1,
    projectName: '',
    creator: '',
    task: [],
    description: '',
  });

  const navigate = useNavigate();
  const addHandler = () => {
    const updatedValue = {
      id: 1,
      projectName: projectName,
      creator: assignedUser,
      task: [],
      description: description,
    };
    setNewProject(updatedValue);
    navigate('/projects');
  };

  // new project
  console.log(newProject);

  return (
    <Box
      component='form'
      sx={{
        paddingLeft: '100px',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <div>
          <h1>Create Project</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <TextField
              id='outlined-multiline-flexible'
              label='Project Name'
              multiline
              maxRows={4}
              className='input-field'
              sx={{ width: '600px' }}
              onChange={handleNameChange}
              required
            />
            <Dropdown users={users} setAssignedUser={setAssignedUser} />
          </div>
          <Editor
            value={description}
            onEditorChange={(article) => handleDescriptionChange(article)}
          />
        </div>
        <Button
          variant='contained'
          sx={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => {
            addHandler();
          }}
        >
          ADD
        </Button>
      </div>
    </Box>
  );
}
