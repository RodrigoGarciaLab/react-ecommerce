import * as types from '../constants/ActionTypes'
import * as config from '../constants/Config'
import axios from 'axios'
import { getAuthHeaders } from './auth'

const receiveOrders = orders => ({
  type: types.RECEIVE_ORDERS,
  orders
})

export function getAllOrders(){
  return (dispatch) =>{
    return axios.get(
              config.API_URL + '/orders',
              getAuthHeaders()
            )
            .then(response => { dispatch(receiveOrders(response.data)) })
            .catch(error => {console.log(error.response)});
  }
}

const updateOrder = order => ({
  type: types.UPDATE_ORDER,
  order
})

export const editOrder= (order) => (dispatch) => {
    return axios.put(
      config.API_URL + `/orders/${order.id}`,
      { order: order },
      getAuthHeaders()
    )
    .then(response => { dispatch(updateOrder(order)) })
    .catch(error => console.log(error))
  }

const destroyOrder = orderId => ({
  type: types.DELETE_ORDER,
  orderId
})

export const deleteOrder = orderId => (dispatch) => {
  return axios.delete(
      config.API_URL + '/orders/' + orderId,
      getAuthHeaders() 
    )
    .then(response => { dispatch(destroyOrder(orderId)) })
    .catch(error => console.log(error))
}