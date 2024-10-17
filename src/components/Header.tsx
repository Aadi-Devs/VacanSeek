import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="justify-between">
        <div className="flex items-center">
          <MapPin className="text-blue-600 mr-2" />
          <span className="text-xl font-bold text-blue-600">VacanSeek</span>
        </div>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Venues</Button>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;