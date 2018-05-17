// debe ser asi para que se reconozcan los types
import * as React from 'react';
import TodoItem from '../components/TodoItem';

interface VisibleTodoInterface {
    todo: TodoItemInterface[],
    filter: string,
    toogle(id: string):void
}

interface TodoItemInterface {
    completed: boolean;
    id: string,
    text: string
  }

// compont tiene dos parametros props y states, son objetos
class VisibleTodoList extends React.Component <VisibleTodoInterface,{}> {

  public render() {
    let todoItems: any[] = [];
    const todoFilter = this.getVisibleTodos(this.props.todo, this.props.filter);
    
    if (todoFilter) {
        todoItems = todoFilter.map((item: any, index: number): any => (
            <TodoItem key= {item.id}
                id= {item.id}
                completed= {item.completed}
                click= {this.props.toogle}>
               
                {item.text} 
            </TodoItem>
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

  private getVisibleTodos = (todos: TodoItemInterface[], filter: string): TodoItemInterface[]  => {
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

}

export default VisibleTodoList;