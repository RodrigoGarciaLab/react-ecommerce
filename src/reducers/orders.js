import { combineReducers } from 'redux'
import { RECEIVE_ORDERS, UPDATE_ORDER, DELETE_ORDER } from '../constants/ActionTypes'

const orders = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ORDERS:
      return {
        ...state,
        ...action.orders.reduce((obj, order) => {
          obj[order.id] = order
          return obj
        }, {})
      }
    case DELETE_ORDER:{
      delete state[action.orderId] // delete the hash associated with the action.id
      return state
    }
    case UPDATE_ORDER:{
      console.log("orderid", action.order.id);
      console.log("order", action.order);
      state[action.order.id] = action.order;
      return state
    }
    default:
      const { orderId } = action
      if (orderId) {
        return {
          ...state,
          [orderId]: orders(state[orderId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders.map(product => product.id)
    case DELETE_ORDER:{
      return state.filter(item => {return item !== action.orderId})
    }
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getOrder = (state, id) =>
  state.byId[id]

export const getVisibleOrders = state =>
  state.visibleIds.map(id => getOrder(state, id))
