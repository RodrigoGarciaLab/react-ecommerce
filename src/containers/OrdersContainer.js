import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editOrder, getAllOrders } from '../actions'
import { getVisibleOrders } from '../reducers/orders'
import Order from '../components/Order'
import ItemsList from '../components/ItemsList'
import { Card } from 'semantic-ui-react'


let createHandlers = function(dispatch) {
  let fetchOrders = function(node, data) {
    dispatch(getAllOrders())
  };
  let updateOrder = function(data) {
    dispatch(editOrder(data))
  };
  return {
    fetchOrders,
    updateOrder
  };
}

class OrdersContainer extends Component {

  constructor(props){
    super(props)
    this.state = { orders: []}
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentDidMount = () => {
    this.handlers.fetchOrders()
  }

  render = () => (
    <ItemsList title="Orders">
      <Card.Group>
        {this.props.orders.map(order =>
          <Order
            key={order.id}
            order={order}
            onEditClicked={(order) => this.handlers.updateOrder(order)}
          />
        )}
      </Card.Group>
    </ItemsList>
  )
}

OrdersContainer.propTypes = {
  orders: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  orders: getVisibleOrders(state.orders)
})

export default connect(
  mapStateToProps
)(OrdersContainer)
