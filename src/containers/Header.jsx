import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTotal, getCartProducts } from '../reducers';
import { logout, userLoggedIn } from '../actions'
import { Menu, Icon, Button } from 'semantic-ui-react';
import LoginControl from '../components/LoginControl'

class Header extends Component{ 
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={NavLink} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name='home' />
        </Menu.Item>

        <Menu.Item
          as={NavLink} to='/products'
          name='products'
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
        >
          Products
        </Menu.Item>

        <Menu.Item
          as={NavLink} to='/users'
          name='users'
          active={activeItem === 'users'}
          onClick={this.handleItemClick}
        >
          Users
        </Menu.Item>

        <Menu.Item
          as={NavLink} to='/orders'
          name='orders'
          active={activeItem === 'orders'}
          onClick={this.handleItemClick}
        >
          Orders
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            as={NavLink} to='/cart'
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
          >
            <Button animated='vertical'>
              <Button.Content hidden>${this.props.total}</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
          </Menu.Item>
          <LoginControl isLoggedIn={userLoggedIn()} handleLogout={this.props.handleLogout} />
          
        </Menu.Menu>
      </Menu>
    )
  } 
};

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: (data) => {
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)