import { Avatar, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { User } from '../../../../../../store/users/models/users-state';
import { URLAVATAR } from '../../../../consts/links';

export const UserCardAvatar = ({ user }: { user: User }) => {
    return (
        <Link to={`./${user.id}`}>
        <Tooltip
          title={user.name}
          >
          <Avatar
          src={`${URLAVATAR}?random=${Math.random()}`}
          />
        </Tooltip>
      </Link>
    );
};

