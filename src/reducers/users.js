import { combineReducers } from 'redux'
import { RECEIVE_USERS, UPDATE_USER, DELETE_USER } from '../constants/ActionTypes'

const users = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users.reduce((obj, user) => {
          obj[user.id] = user
          return obj
        }, {})
      }
    case DELETE_USER:{
      delete state[action.userId] // delete the hash associated with the action.id
      return state
    }
    case UPDATE_USER:{
      console.log("userid", action.user.id);
      console.log("user", action.user);
      state[action.user.id] = action.user;
      return state
    }
    default:
      const { userId } = action
      if (userId) {
        return {
          ...state,
          [userId]: users(state[userId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users.map(product => product.id)
    case DELETE_USER:{
      return state.filter(item => {return item !== action.userId})
    }
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getUser = (state, id) =>
  state.byId[id]

export const getVisibleUsers = state =>
  state.visibleIds.map(id => getUser(state, id))
