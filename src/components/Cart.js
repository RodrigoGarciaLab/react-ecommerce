import React from 'react'
import PropTypes from 'prop-types'
import CartProduct from './CartProduct'
import { List, Label, Button } from 'semantic-ui-react'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <CartProduct
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        imageUrl={product.image_url}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <List divided verticalAlign='middle'>
        {nodes}
      </List>

      <Label key="big" size="big">
        Total: USD {total}
      </Label>
      <Button 
        content='Checkout' icon='right arrow' labelPosition='right' 
        onClick={onCheckoutClicked} 
        disabled={hasProducts ? false : true} 
      />
        
    </div>
  )
  
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
