// debe ser asi para que se reconozcan los types
import * as React from 'react';
import TodoItem from '../components/TodoItem';

// compont tiene dos parametros props y states, son objetos
class VisibleTodoList extends React.Component <any,{}> {

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

    let todoItems: any[] = [];
    
    if (this.props.todo) {
        todoItems = this.props.todo.map((item: string, index: number): any => (
            <TodoItem key= {index}> {item} </TodoItem>
        ),[]);
    }

    return (
        <div>
            <p>Contenedor de items todo por props</p>
            <ul>
                {todoItems}
            </ul>

            {/* <p>Contenedor de items todo manual</p>
            <ul>
            <TodoItem> Primer item</TodoItem> 
            <TodoItem> segundo item</TodoItem> 
            <TodoItem> N item</TodoItem> 
            </ul> */}
        </div>
    );
  }
}

export default VisibleTodoList;