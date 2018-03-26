import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, deleteProduct } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ItemsList from '../components/ItemsList'
import { Card } from 'semantic-ui-react'

const ProductsContainer = ({ products, addToCart, deleteProduct }) => (
  <ItemsList title="Products">
    <Card.Group>
      {products.map((product,index) =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
          onDeleteClicked={() => deleteProduct(product.id)}
        />
      )}
    </Card.Group>
  </ItemsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart, deleteProduct }
)(ProductsContainer)
