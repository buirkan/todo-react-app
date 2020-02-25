import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../components/template/iconButton'
import { markTodoAsDone, markTodoAsPending, deleteTodo } from './todoActions'

const actions = [markTodoAsDone, markTodoAsPending, deleteTodo]
const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style="success" onClick={() => props.markTodoAsDone(todo)} icon="check" hide={todo.done} />
          <IconButton style="warning" onClick={() => props.markTodoAsPending(todo)} icon="undo" hide={!todo.done} />
          <IconButton style="danger" onClick={() => props.removeTodo(todo)} icon="trash" hide={!todo.done} />
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => (bindActionCreators({ ...actions }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)