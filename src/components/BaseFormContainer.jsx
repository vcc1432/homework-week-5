import * as React from 'react'
import {connect} from 'react-redux';
import BaseForm from './BaseForm'
import {selectPizza} from '../actions/pizzas'


class BaseFormContainer extends React.PureComponent {
  state = {base: {}, sauce: {}, toppings: []}

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

  componentWillUpdate= (prevState) => {
    console.log('This is the prevState:', prevState)
   if (prevState.pizzas.selectedPizza !== this.state) {
    this.props.selectPizza(this.state)
    } 
  }


  render() {
    console.log(this.state)
    console.table(this.state)
    return (
      <BaseForm 
        bases={this.props.pizzas.bases}
        sauces={this.props.pizzas.sauces}
        handleChangeBase={this.handleChangeBase}
        handleChangeSauce={this.handleChangeSauce}/>
      )
  }
}
    
const mapStateToProps = (state) => {
  return ({
    pizzas: state.pizzas
  })
}

export default connect(mapStateToProps, {selectPizza})(BaseFormContainer)












