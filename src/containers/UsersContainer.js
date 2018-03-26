import React, {Component} from 'react';
import PropTypes from "prop-types"
import ItemsList from "../components/ItemsList"
import User from "../components/User"
import { connect } from 'react-redux'
import { editUser, deleteUser, getAllUsers, userAdmin } from '../actions'
import { getVisibleUsers } from '../reducers/users'
import { Card } from 'semantic-ui-react'

let createHandlers = function(dispatch) {
  let fetchUsers = function(node, data) {
    dispatch(getAllUsers())
  };
  let updateUser = function(data) {
    dispatch(editUser(data))
  };
  return {
    fetchUsers,
    updateUser
  };
}

class UsersContainer extends Component {
  constructor(props){
    super(props)
    this.state = { users: []}
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentDidMount = () => {
    if ( userAdmin() ){
      this.handlers.fetchUsers()
    }
    
  }

  render = () => (
    <ItemsList title="Users">
      <Card.Group>
        {this.props.users.map(user =>
          <User
            key={user.id}
            user={user}
            onEditClicked={(user) => editUser(user)}
            onDeleteClicked={() => deleteUser(user.id)}
          />
        )}
      </Card.Group>
    </ItemsList>
  )
}

UsersContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })).isRequired
}

const mapStateToProps = state => ({
  users: getVisibleUsers(state.users)
})

export default connect(
  mapStateToProps,
)(UsersContainer)