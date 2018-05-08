// debe ser asi para que se reconozcan los types
import * as React from 'react';
import TodoItem from '../components/TodoItem';

// compont tiene dos parametros props y states, son objetos
class VisibleTodoList extends React.Component <{},{}> {

    public getVisibleTodos = (todos: any[], filter: string): any[] => {
        switch (filter) {
          case 'SHOW_ALL':
            return todos
          case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
          case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
          default:
            throw new Error('Unknown filter: ' + filter)
        }
      };


  public render() {
    return (
        <div>
            <p>Contenedor de items todo</p>
            <ul>
            <TodoItem> Primer item</TodoItem> 
            <TodoItem> segundo item</TodoItem> 
            <TodoItem> N item</TodoItem> 
            </ul>
        </div>
    );
  }
}

export default VisibleTodoList;