import * as React from 'react'
import {connect} from 'react-redux';

class Total extends React.Component {
   getTotal = () => {
    const total = this.props.pizzas.base.price + this.props.pizzas.sauce.price
    return total
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
  

