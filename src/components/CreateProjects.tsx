import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { AppDispatch, RootState } from '../redux/store';
import { fetchAllUsers } from '../redux/userReducer';
import Dropdown from './Dropdown';
import { display } from '@mui/system';

export default function CreateProjects() {
  const users = useSelector((state: RootState) => state.userReducer);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

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
            />
            <Dropdown users={users} />
          </div>
          <Editor />
        </div>
        <Button
          variant='contained'
          sx={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          ADD
        </Button>
      </div>
    </Box>
  );
}
