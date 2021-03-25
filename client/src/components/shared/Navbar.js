import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/settings">
      <Menu.Item>
        Settings
      </Menu.Item>
    </Link>
    <Link to="/profiles">
      <Menu.Item>
        Profiles
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar