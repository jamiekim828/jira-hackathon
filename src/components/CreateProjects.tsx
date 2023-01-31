import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { AppDispatch, RootState } from '../redux/store';
import { fetchAllUsers } from '../redux/userReducer';
import Dropdown from './Dropdown';

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
          <TextField
            id='outlined-multiline-flexible'
            label='Project Name'
            multiline
            maxRows={4}
          />
          <TextField
            id='outlined-multiline-static'
            label='Project Description'
            multiline
            rows={4}
          />
        </div>
        <Dropdown users={users} />
      </div>
    </Box>
  );
}
