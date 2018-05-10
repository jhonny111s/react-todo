import * as React from 'react';

import './App.css';

import AppTodo from './containers/AddTodo';
import MenuFilter from './containers/MenuFilter';
import VisibleTodoList from './containers/VisibleTodoList';



class App extends React.Component<any, any> {

  constructor(props: any) {
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


  public addItemHandler (newItem: any): any {
    if(!newItem.text.trim()) {
      return;
    }

    const newTodo = this.state.todo.concat(newItem);
    if (this.state.todo !== newTodo ) {
      this.setState({todo: newTodo});
    }
    
  }

  public toogleItemHandler (id: string): any {

    const newTodo = this.state.todo.map((item: any):any => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({todo: newTodo}); 
  }

  public changeFilterHandler = (filterText: string) => {
    this.setState({...this.state, filter: filterText});
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
}

export default App;
