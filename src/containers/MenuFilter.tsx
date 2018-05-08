// debe ser asi para que se reconozcan los types
import * as React from 'react';


// compont tiene dos parametros props y states, son objetos
class MenuFilter extends React.Component <{},{}> {


  public render() {
    return (
        <div>
            <p>Menu filter</p>
            <button> All </button>
            <button> Active </button>
            <button> Complete </button>
        </div>
    );
  }
}

export default MenuFilter;