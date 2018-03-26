import React from "react"
import { Card, Button, Image} from 'semantic-ui-react'

class User extends React.Component {

  constructor(props){
    super(props)
    this.state = { editable: false }
  }

  handleEdit = () => {
    if(this.state.editable) {
      var name = this.refs.name.value;
      var id = this.props.user.id;
      var email = this.refs.email.value;
      var user = {id: id , name: name , email: email};
      this.props.onEditClicked(user);
    }
    this.setState({editable: !this.state.editable})
  }

  render = () => {
    var name  = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.user.name} /> : <h3>{this.props.user.name}</h3>;
    var email = this.state.editable ? <input type='text' ref='email' defaultValue={this.props.user.email} />: <p>{this.props.user.email}</p>;

    return (
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            {email}
          </Card.Meta>
          
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button primary onClick={this.props.onDeleteClicked} >Delete</Button>
            <Button secondary onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default User
