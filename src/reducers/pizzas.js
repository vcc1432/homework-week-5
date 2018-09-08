import { bases, sauces, toppings } from '../components/options'
import { SELECT_PIZZA } from '../actions/pizzas'


const initialState = {
  bases,
  sauces,
  toppings,
  selectedPizza: {}
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SELECT_PIZZA:
      return {...state, selectedPizza: action.payload}
    default:
      return state
    }
  }
  
  export default reducer