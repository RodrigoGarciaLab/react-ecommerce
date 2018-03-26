import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Body from './Body';

const Layout = () => ( 
  <Router>
    <div> 
      <Header />
      <Body />
     
    </div> 
  </Router>
) 

export default Layout