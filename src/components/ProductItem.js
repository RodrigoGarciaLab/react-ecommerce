import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Popup, Image } from 'semantic-ui-react'

const ProductItem = ({ product, onAddToCartClicked, onDeleteClicked }) => (
  <Card>
    <Image src={product.image_url} />
    <Card.Content>
      <Card.Header>
        {product.name}
      </Card.Header>
      
      <Card.Description>
        USD - {product.price}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Popup
        trigger={<Button primary onClick={onAddToCartClicked}> Add to cart! </Button>}
        content='Added!'
        inverted
        on='click'
        hideOnScroll
      />
      <Button secondary onClick={onDeleteClicked}> Delete </Button>
    </Card.Content>
  </Card>
    
 
)


ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
