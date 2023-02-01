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
import { TaskType } from '../types/TaskType';

type NewTask = {
  id: number;
  name: string;
  creator: string;
  //members: string[]
  description: string;
};
export default function CreateTask() {
  const users = useSelector((state: RootState) => state.userReducer);

  const [taskName, setTaskName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [assignedUser, setAssignedUser] = useState<string | null>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };
  const handleDescriptionChange = (article: string) => {
    setDescription(article);
  };

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [newTask, setNewTask] = useState<TaskType>({
    id: 1,
    name: '',
    creator: '',
    description: '',
  });

  const addHandler = () => {
    // const updatedValue = {
    //   id: 1,
    //   name: taskName,
    //   creator: assignedUser,
    //   description: description,
    // };
    // setNewTask(updatedValue);
  };

  // new task
  console.log(newTask);

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
