import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Login extends Component{ 

  sendLogin = () => {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.handleLogin(email,password)
    this.refs.email.value = ''
    this.refs.password.value = ''
  }

  
  render = () => (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input 
          name="email"
          ref="email"
          type="email"
          placeholder='Email' 
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input 
          name="password"
          ref="password"
          type="password"
          placeholder='Password' 
        />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit' onClick={this.sendLogin} >Login</Button>
    </Form>
  )

};

const mapStateToProps = state => ({
  auth: getVisibleProducts(state.products)
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (email, password) => {
      dispatch(login(email, password))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)