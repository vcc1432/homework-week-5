import * as React from 'react'
import {connect} from 'react-redux';


class PizzaFormContainer extends React.PureComponent {
  render() {
    console.log(this.props.pizzas)
    return (
      <div>
        <h1>Hello!</h1>       
      </div>
    )
  }
}
    
const mapStateToProps = (state) => {
  console.log("is it working?")
  return ({
    pizzas: state.pizzas
  })
}

export default connect(mapStateToProps)(PizzaFormContainer)












