import * as React from 'react'
import {connect} from 'react-redux';
import BaseForm from './BaseForm'
import {selectPizza} from '../actions/pizzas'


class BaseFormContainer extends React.PureComponent {
  state = {
    base: {
      id: 1,
      type: "25cm NY Style",
      price: 8.99
    },
    sauce: {
      id: 1,
      type: "White sauce",
      price: 0
    },
    turboDrone: false
  }

  handleChangeBase = (event) => {
    const baseId = parseInt(event.target.value)
    const selectedBase = this.props.pizzas.bases.find(base => (base.id === baseId))
      
  this.setState({
       base: {
        id: selectedBase.id,
        type: selectedBase.type,
        price: selectedBase.price
      }
    }) 
  }

  handleChangeSauce = (event) => {
    const sauceId = parseInt(event.target.value)
    const selectedSauce = this.props.pizzas.sauces.find(sauce => (sauce.id === sauceId))
      
  this.setState({ 
      sauce: {
        id: selectedSauce.id,
        type: selectedSauce.type,
        price: selectedSauce.price
      }
    }) 
  }

  // componentWillUpdate= (prevState) => {
  //   console.log('This is the prevState:', prevState)
  //  if (prevState.pizzas.selectedPizza !== this.state) {
  //   this.props.selectPizza(this.state)
  //   } 
  // }

  handleInputChange= (event) => {
    const target = event.target;
    const value = target.checked
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.selectPizza(this.state)
  }

  render() {
    console.log(this.state)
    console.table(this.state)
    return (
      <BaseForm 
        bases={this.props.pizzas.bases}
        sauces={this.props.pizzas.sauces}
        handleChangeBase={this.handleChangeBase}
        handleChangeSauce={this.handleChangeSauce}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        turboDrone={this.state.turboDrone}
        />
      )
  }
}
    
const mapStateToProps = (state) => {
  return ({
    pizzas: state.pizzas
  })
}

export default connect(mapStateToProps, {selectPizza})(BaseFormContainer)












