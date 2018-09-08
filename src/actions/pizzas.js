export const SELECT_BASE = 'SELECT_BASE'
export const SELECT_SAUCE = 'SELECT_SAUCE'


export function selectBase(selectedBase){
    return {
      type: SELECT_BASE,
      payload: selectedBase
    }
  }

  export function selectSauce(selectedSauce){
    return {
      type: SELECT_SAUCE,
      payload: selectedSauce
    }
  }