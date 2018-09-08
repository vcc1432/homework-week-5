export const SELECT_PIZZA = 'SELECT_PIZZA'
export const SELECT_TOPPINGS = 'SELECT_TOPPINGS'

export function selectPizza(selected){
    return {
      type: SELECT_PIZZA,
      payload: selected
    }
  }


  export function selectToppings(toppings){
      return {
        type: SELECT_TOPPINGS,
        payload: toppings
      }
  }