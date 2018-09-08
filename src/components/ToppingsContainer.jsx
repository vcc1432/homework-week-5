import * as React from 'react'
import { toppings } from './options'
import {selectToppings} from '../actions/pizzas'
import {connect} from 'react-redux';

class ToppingsContainer extends React.Component {
 state = []

  handleInputChange= (event) => {
    const toppingId = parseInt(event.target.value)
    const selectedTopping = this.props.pizzas.toppings.find(topping => (topping.id === toppingId))

    if (event.target.checked === true) {
    this.setState({
            id: selectedTopping.id,
            type: selectedTopping.type,
            price: selectedTopping.price
            })
        }
  }

  render() {
      console.log(this.state)
    return (
      <div>
          <p>Toppings:</p>
        {toppings.map(item => (
            <label key={item.id}>
              {item.type}
              <input type='checkbox' 
              value={item.id}
              name={item.type}
              onChange={this.handleInputChange} 
              />
              <br />
            </label>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return ({
      pizzas: state.pizzas
    })
  }
  
  export default connect(mapStateToProps, {selectToppings}) (ToppingsContainer)
  

