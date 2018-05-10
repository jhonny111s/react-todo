/* 
    - Los componentes no deberian tener logica solo recibirla por medio de props 
    - No especifica como se carga o cambia la informacion
    - usualmente es como lucen las cosas.
*/

// debe ser asi para que se reconozcan los types
import * as React from 'react';

// compont tiene dos parametros props y states, son objetos
class TodoItem extends React.Component <any,any> {

  public render() {
    return (
        <li id = {this.props.id}
        onClick = {this.props.click}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}> {this.props.children} </li>

        
    );
  }
}

export default TodoItem;