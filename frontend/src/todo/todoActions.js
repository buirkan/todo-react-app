import axios from 'axios'

const URLAPI = 'http://localhost:3003/api/todos'

export const changeDescription = (e) => {
  return { type: 'DESCRIPTION_CHANGED', data: e.target.value }
}

export const searchTodo = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URLAPI}?sort=-createdAt${search}`)
      .then(r => dispatch(({ type: 'TODO_SEARCHED', payload: r.data })))
  }
}

export const addTodo = (description) => {
  return dispatch => {
    axios.post(URLAPI, { description })
      .then(r => dispatch(clear()))
      .then(r => dispatch(searchTodo()))
  }
}

export const markTodoAsDone = (todo) => {
  return dispatch => {
    axios.put(`${URLAPI}/${todo._id}`, { ...todo, done: true })
      .then(r => dispatch(searchTodo()))
  }
}

export const markTodoAsPending = (todo) => {
  return dispatch => {
    axios.put(`${URLAPI}/${todo._id}`, { ...todo, done: false })
      .then(r => dispatch(searchTodo()))
  }
}

export const deleteTodo = (todo) => {
  return dispatch => {
    axios.delete(`${URLAPI}/${todo._id}`)
      .then(r => dispatch(searchTodo()))
  }
}

export const clear = () => {
  return [{ type: 'TODO_CLEAR' }, searchTodo()]
}

/*
  // redux-multi. Problem in this case: the search isn't called always after the add event
  export const addTodo = (description) => {
  const request = axios.post(URLAPI, { description })
  return [
    { type: 'TODO_ADDED', payload: request },
    searchTodo()
  ]
}
*/