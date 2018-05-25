/* Contenedor que se encarga de centralizar toda la logica de almacenamiento, este seria el padre encargado de pasar el store (sin a redux) */

import * as React from 'react';

import './App.css';

import AppTodo from './containers/AddTodo';
import MenuFilter from './containers/MenuFilter';
import VisibleTodoList from './containers/VisibleTodoList';

// Las interface son el esquema para validar el tipo de las propiedades de un objeto
interface TodoStateInterface {
  filter: string;
  todo: TodoItemInterface[];
}

interface TodoItemInterface {
  completed: boolean;
  id: string,
  text: string
}

// La logica se pasa como props y como este es el padre nadie le pasa nada
// El estado es el almacenamiento local que usa el contenedor o componente
class App extends React.Component <{}, TodoStateInterface> {
 
  constructor(props: {}) {
    super(props);
    this.addItemHandler = this.addItemHandler.bind(this);
    this.toogleItemHandler = this.toogleItemHandler.bind(this);
    this.changeFilterHandler = this.changeFilterHandler.bind(this);
    this.state = {
      filter: 'SHOW_ALL',
      todo: [
   
      ], 
    };
  }

  public render() {
    return (
      <div className="App">
        <div className="App-intro">
          <AppTodo add= {this.addItemHandler}/>
          <VisibleTodoList todo = {this.state.todo} toogle= {this.toogleItemHandler} filter={this.state.filter}/>
          <MenuFilter filter= {this.state.filter} change= {this.changeFilterHandler}/>
        </div>   
      </div>
    );
  }

  private addItemHandler (newItem: TodoItemInterface): void {
    if(!newItem.text.trim()) {
      return;
    }

    const newTodo = this.state.todo.concat(newItem);
    if (this.state.todo !== newTodo ) {
      this.setState({todo: newTodo});
    }
    
  }

  private toogleItemHandler (id: string): void {

    const newTodo = this.state.todo.map((item: TodoItemInterface) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({todo: newTodo}); 
  }

  private changeFilterHandler = (filterText: string): void => {
    this.setState({...this.state, filter: filterText});
  }
}

export default App;
