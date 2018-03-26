import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

const LoginControl = ({ isLoggedIn, handleLogout }) => {
  if (!isLoggedIn){
    return (
      <Menu.Item as={NavLink} to='/login' name='login' >
        Login
      </Menu.Item>
    )
  }
  return (
    <Menu.Item as={Button} onClick={handleLogout} >
      Logout
    </Menu.Item>
  )

}

export default LoginControl