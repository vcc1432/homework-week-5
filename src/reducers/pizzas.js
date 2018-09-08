import { bases, sauces, toppings } from '../components/options'
import { SELECT_PIZZA, SELECT_TOPPINGS } from '../actions/pizzas'


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
    turboDrone: false
  },
  selectedToppings: []
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SELECT_PIZZA:
        return {...state, selectedPizza: action.payload}
      case SELECT_TOPPINGS:
        return {...state, selectedToppings: [...state.selectedToppings, action.payload]}
    default:
      return state
    }
  }
  
  export default reducer