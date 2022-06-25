import { Avatar, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { User } from '../../../../../../store/users/models/users-state';
import { urlavatar } from '../../../../consts/links';

export const UserCardAvatar = ({ user }: { user: User }) => {
    return (
        <Link to={`./${user.id}`}>
        <Tooltip
          title={user.name}
          >
          <Avatar
          src={urlavatar}
          />
        </Tooltip>
      </Link>
    );
};

