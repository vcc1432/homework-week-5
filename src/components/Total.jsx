import * as React from 'react'
import {connect} from 'react-redux';

class Total extends React.Component {
   getTotal = () => {
    const subTotal = this.props.pizzas.base.price + this.props.pizzas.sauce.price

    if (this.props.pizzas.turboDrone === true) {
      const total = subTotal + (subTotal * 0.1)
      return total
    } else {
      return subTotal
    }
   } 


  render() {
      console.log('THE PROPS ARE', this.props)
    return (
      <div>
          <h1>Total: €{this.getTotal()}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return ({
      pizzas: state.pizzas.selectedPizza
    })
  }
  
  export default connect(mapStateToProps) (Total)
  

