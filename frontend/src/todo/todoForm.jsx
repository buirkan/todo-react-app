import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../components/template/grid'
import IconButton from '../components/template/iconButton'
import { changeDescription, searchTodo, addTodo, clear } from './todoActions'

const actions = [changeDescription, searchTodo, addTodo, clear]

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.handleKeyEvent = this.handleKeyEvent.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.props.searchTodo()
  }

  handleKeyEvent(e) {
    const { addTodo, clear, searchTodo, description } = this.props
    if (e.key === "Enter") {
      e.shiftKey ? searchTodo() : addTodo(description)
    } else if (e.key === "Escape") {
      clear()
    }
  }

  render() {
    const { addTodo, clear, searchTodo, description } = this.props
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input type='text' className='form-control' id='todo-description' placeholder='Adicione uma tarefa...'
            onChange={this.props.changeDescription} onKeyUp={this.handleKeyEvent} value={description} />
        </Grid>

        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => addTodo(description)} />
          <IconButton style='info' icon='search' onClick={searchTodo} />
          <IconButton style='default' icon='close' onClick={clear} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ description: state.todo.description })
const mapDispatchToProps = (dispatch) => (bindActionCreators({ ...actions }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)