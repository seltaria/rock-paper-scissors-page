export const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_SCORE": {
      return state + 1
    }
    default:
      return state
  }
}