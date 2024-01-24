export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('action.tupe = ABC no está implementada')
  
    default:
      return initialState
  }
}
