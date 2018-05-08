/* 
 - Como funciona, aqui deberia existir una logica o proveer datos y/o comportamientos a otros componentes
 - usualmente tiene estados
*/


// debe ser asi para que se reconozcan los types
import * as React from 'react';

// compont tiene dos parametros props y states, son objetos
class AddTodo extends React.Component <{},{}> {
  public render() {
    return (
        <div>
          <form>
            <input />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
    );
  }
}

export default AddTodo;