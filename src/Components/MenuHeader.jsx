import { HamburgerIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logoutUserAction } from '../Redux/userReducer';

const MenuHeader = () => {
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    dispatch(logoutUserAction());
  };
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        variant="outline"
        icon={<HamburgerIcon />}
      ></MenuButton>
      <MenuList>
        <MenuItem onClick={() => logout()}>Выйти</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuHeader;
