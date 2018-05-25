/* 
    - Los componentes no deberian tener logica solo recibirla por medio de props 
    - No especifica como se carga o cambia la informacion, generalmente no tienen estado
    - usualmente es como lucen las cosas.
*/

// debe ser asi para que se reconozcan los types
import * as React from 'react';

interface TodoItemInterface {
  id: string,
  completed: boolean,
  click(id: string):void
}

// compont tiene dos parametros props y states, son objetos
class TodoItem extends React.Component <TodoItemInterface,{}> {

  public render() {
    return (
        <li id = {this.props.id}
        onClick = {this.onToogleItem}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}> {this.props.children} </li>

        
    );
  }

  private onToogleItem = () => {
    this.props.click(this.props.id);
  }
}

export default TodoItem;