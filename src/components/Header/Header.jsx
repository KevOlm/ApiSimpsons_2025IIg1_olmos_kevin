import React, { useState } from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/img/simpsons_logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Simpsons Logo" />
        </Link>
      </div>
      <div className="enlaces">
        <ul>
          <li><Link to="/characters">Personajes</Link></li>
          <li><Link to="/episodes">Episodios</Link></li>
          <li><Link to="/locations">Ubicaciones</Link></li>
        </ul>
      </div>

      <div className="menu-mobile">
        <IconButton onClick={handleMenuOpen} color="primary">
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          slotProps={{ paper: { sx: { backgroundColor: '#ffeb3b' } } }}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/characters">Personajes</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/episodes">Episodios</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/locations">Ubicaciones</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
