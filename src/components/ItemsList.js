import React from 'react'
import PropTypes from 'prop-types'

const ItemsList = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
)

ItemsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ItemsList
