import { UserType } from '../types/UserType';
// MUI
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type PropType = {
  users: UserType[];
  setAssignedUser: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Dropdown({
  users,

  setAssignedUser,
}: PropType) {
  const userName = users.map((user) => user.name);
  const assignUserHandler = (e: React.SyntheticEvent, value: string | null) => {
    setAssignedUser(value);
  };

  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={userName}
      onChange={(e, value) => assignUserHandler(e, value)}
      renderInput={(params) => (
        <TextField {...params} value={params} label='Assign Users' />
      )}
    />
  );
}
