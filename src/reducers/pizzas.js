import { bases, sauces } from '../components/options'
import { SELECT_BASE, SELECT_SAUCE} from '../actions/pizzas'


const initialState = {
  bases,
  sauces,
  selectedBase: {},
  selectedSauce: {}
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SELECT_BASE:
      return {...state, selectedBase: action.payload}
      case SELECT_SAUCE:
      return {...state, selectedSauce: action.payload}
    default:
      return state
    }
  }
  
  export default reducer