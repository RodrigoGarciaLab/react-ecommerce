import React from 'react';
import { Route } from 'react-router-dom';

import Home              from '../components/Home';
import ProductsContainer from './ProductsContainer';
import CartContainer     from './CartContainer';
import UsersContainer    from './UsersContainer';
import Login             from '../components/Login'
import OrdersContainer   from './OrdersContainer';

const Body = () => ( 
  <div className="flex-grow">   
    <Route exact path="/" component={Home}></Route>
    <Route path="/products" component={ProductsContainer}></Route>
    <Route path="/users" component={UsersContainer}></Route>
    <Route path="/orders" component={OrdersContainer}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/cart" component={CartContainer}></Route>
  </div> 
)  

export default Body