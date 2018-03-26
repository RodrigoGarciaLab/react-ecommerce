import React from "react"
import { Card, Button } from 'semantic-ui-react'

class Order extends React.Component {

  constructor(props){
    super(props)
    this.state = { editable: false }
  }

  handleEdit = () => {
    if(this.state.editable) {
      var sent = this.refs.sent.checked;
      console.log("sent", sent);
      var order = { ...this.props.order, sent: sent};
      this.props.onEditClicked(order);
    }
    this.setState({editable: !this.state.editable})
  }

  render = () => {
    var sent  = this.state.editable ? 
                <input type='checkbox' ref='sent' defaultChecked={this.props.order.sent}/> :
                <input type='checkbox' ref='sent' defaultChecked={this.props.order.sent} disabled="disabled"/>
    
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            Order id: {this.props.order.id} - USD {this.props.order.total}
          </Card.Header>
          <Card.Meta>
            {sent} Sent
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

export default Order