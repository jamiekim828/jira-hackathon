import { UserType } from '../types/UserType';
// MUI
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type PropType = {
  users: UserType[];
};

export default function Dropdown({ users }: PropType) {
  const userName = users.map((user) => user.name);
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={userName}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='Users' />}
    />
  );
}
