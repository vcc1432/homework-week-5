import * as React from 'react'
import {connect} from 'react-redux';
import BaseForm from './BaseForm'
import { bases } from './options'
import {selectBase} from '../actions/pizzas'


class BaseFormContainer extends React.PureComponent {
  state = {
    id: '',
    type: '',
    price: ''
  }

  handleChange = (event) => {
    const baseId = parseInt(event.target.value)
    const selectedBase = bases.find(base => (base.id === baseId))
      
  this.setState({
    id: selectedBase.id,
    type: selectedBase.type,
    price: selectedBase.price
    }) 
  this.props.selectBase(this.state)
  }
  

  render() {
    return (
      <BaseForm 
        bases={this.props.pizzas.bases}
        handleChange={this.handleChange}/>
      )
  }
}
    
const mapStateToProps = (state) => {
  return ({
    pizzas: state.pizzas
  })
}

export default connect(mapStateToProps, {selectBase})(BaseFormContainer)












