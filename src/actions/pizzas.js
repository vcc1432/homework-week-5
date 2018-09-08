export const SELECT_PIZZA = 'SELECT_PIZZA'

export function selectPizza(selected){
    return {
      type: SELECT_PIZZA,
      payload: selected
    }
  }


