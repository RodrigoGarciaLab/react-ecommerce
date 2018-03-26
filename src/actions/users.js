import * as types from '../constants/ActionTypes'
import * as config from '../constants/Config'
import axios from 'axios'
import { getAuthHeaders } from './auth'

const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users
})

export function getAllUsers(){
  return (dispatch) =>{
    return axios.get(
              config.API_URL + '/users',
              getAuthHeaders()
            )
            .then(response => { dispatch(receiveUsers(response.data)) })
            .catch(error => {console.log(error.response)});
  }
}

const updateUser = user => ({
  type: types.UPDATE_USER,
  user
})

export const editUser= (user) => (dispatch) => {
    return axios.put(
      config.API_URL + `/users/${user.id}`,
      { user: user },
      getAuthHeaders()
    )
    .then(response => { dispatch(updateUser(user)) })
    .catch(error => console.log(error))
  }

const destroyUser = userId => ({
  type: types.DELETE_USER,
  userId
})

export const deleteUser = userId => (dispatch) => {
  return axios.delete(
      config.API_URL + '/users/' + userId,
      getAuthHeaders() 
    )
    .then(response => { dispatch(destroyUser(userId)) })
    .catch(error => console.log(error))
}