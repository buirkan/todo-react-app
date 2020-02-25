import React, { Component } from 'react'
import PageHeader from '../components/template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// Centralizar boa regra relativa ao cadastro do sistemas
export default class Todo extends Component {
  constructor(props) {
    super(props)
    // this.state = { description: '', list: [] }

    /* Use o método bind quando quiser que essa função seja chamada posteriormente com um determinado contexto. Use call ou apply quando você quiser invocar a função imediatamente modificando ou forçando o contexto. */
    // this.refresh()
  }

  render() {
    // "this" é alterado para quem chamou, e não onde se encontra no contexto léxico
    // dentro do render, a palavra-chave this refere-se à instância do componente associado com o elemento da DOM que representa esse componente
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}