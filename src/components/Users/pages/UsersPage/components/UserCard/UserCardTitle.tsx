import { Typography } from '@mui/material';
import { User } from '../../../../../../store/users/models/users-state';


export const UserCardTitle = ({ user }: { user: User }) => {
    return (
        <Typography 
        variant= "subtitle1"
        sx={{ 
        textTransform: "uppercase", 
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        fontSize: 20
       }}
        >
        {user.name}
      </Typography>
    );
};

