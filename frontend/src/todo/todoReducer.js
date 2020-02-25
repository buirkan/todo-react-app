const INITIAL_STATE = { description: '', list: [] }

// state of Redux is 'flux like': only one pure function can update the status object
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: state.todo.description }
    case 'TODO_SEARCHED':
      /* list: action.payload.data: problem because we're doing a get request and it's a Promise, maybe on that point of lyfecicle the 'data' parameter can not have data. Solution: Redux Middleware => redux-promise */
      return { ...state, list: action.payload }
    case 'TODO_CLEAR':
      return { ...state, description: '' }
    default:
      return state
  }
}