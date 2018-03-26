import * as types from '../constants/ActionTypes'
import * as config from '../constants/Config'
import axios from 'axios'

export const getAuthHeaders = () => {
  var token = typeof localStorage.user === "undefined" ? "unauthorized" : localStorage.user;
  var headers =  { headers: { "Authorization" : token } };
  return headers;
}

export const userLoggedIn = () => {
  return typeof localStorage.user !== "undefined"
}

export const userAdmin = () => {
  return typeof localStorage.admin !== "undefined"
}

export const userLogin = (auth_token, admin) => ({
  type: types.USER_LOGIN,
  auth_token,
  admin
})

export const userLogout = () => ({
  type: types.USER_LOGOUT
})

export const logout = () => (dispatch) => {
  localStorage.removeItem("user")
  localStorage.removeItem("admin")
  dispatch(userLogout())
}

export const login = (email, password) => (dispatch) => {
  return axios.post(
    config.API_URL + '/auth/login',
    { 
      email: email,
      password: password
    })
    .then(response => { 
      localStorage.setItem('user', response.data.auth_token);
      localStorage.setItem('admin', response.data.admin);
      dispatch(userLogin(response.data.auth_token, response.data.admin))
    })
    .catch(error => console.log(error))
  }