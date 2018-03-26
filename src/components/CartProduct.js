import React from 'react'
import PropTypes from 'prop-types'
import { Button, Image, List } from 'semantic-ui-react'

const CartProduct = ({ price, name, quantity, imageUrl }) => (
  <List.Item>
    <List.Content floated='right'>
      <Button>Delete</Button>
    </List.Content>
    <Image avatar src={imageUrl} />
    <List.Content>
      {name} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </List.Content>
  </List.Item>
    

)

CartProduct.propTypes = {
  price: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number
}

export default CartProduct
