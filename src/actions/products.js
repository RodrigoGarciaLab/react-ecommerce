import * as types from '../constants/ActionTypes'
import * as config from '../constants/Config'
import axios from 'axios'
import { getAuthHeaders } from './auth'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export function getAllProducts(){
  return (dispatch) =>{
    return axios.get(config.API_URL + '/products')
            .then(response => { dispatch(receiveProducts(response.data)) })
            .catch(error => { console.log(error.response)});
  }
}

export function changeProducts(products){
  return{
    type:"CHANGE_PRODUCT",
    products
  }
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  dispatch(addToCartUnsafe(productId))
}

const destroyProduct = productId => ({
  type: types.DELETE_PRODUCT,
  productId
})

export const deleteProduct = productId => (dispatch) => {
  return axios.delete(
      config.API_URL + '/products/' + productId,
      getAuthHeaders() 
    )
    .then(response => { 
      dispatch(destroyProduct(productId))
    })
    .catch(error => console.log(error))
}

export const checkout = products => (dispatch, getState) => {
  var product_ids_and_quantities = []
  products.forEach( product => product_ids_and_quantities.push([product.id,product.quantity]))
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  axios.post(
      config.API_URL + '/orders',
      { order:
        {
          product_ids_and_quantities: product_ids_and_quantities
        }
      },
      getAuthHeaders()
    )
    .then(response => {
      console.log(response.data);
      dispatch(placeOrder(products));
    })
    .catch(error => console.log(error))
  }

  
const placeOrder = (products) => dispatch => ({
  type: types.CHECKOUT_SUCCESS,
})


