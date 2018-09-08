import { bases, sauces, toppings } from '../components/options'
import { SELECT_PIZZA } from '../actions/pizzas'


const initialState = {
  bases,
  sauces,
  toppings,
  selectedPizza: {
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
    toppings: [],
    turboDrone: false
  }
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