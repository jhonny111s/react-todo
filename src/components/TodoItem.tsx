/* 
    - Los componentes no deberian tener logica solo recibirla por medio de props 
    - No especifica como se carga o cambia la informacion
    - usualmente es como lucen las cosas.
*/

// debe ser asi para que se reconozcan los types
import * as React from 'react';

// compont tiene dos parametros props y states, son objetos
class TodoItem extends React.Component <{},{}> {

  public render() {
    return (
        <React.Fragment>
        <li> {this.props.children} </li>
        </React.Fragment>
    );
  }
}

export default TodoItem;