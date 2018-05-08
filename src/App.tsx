import * as React from 'react';

import './App.css';

import AppTodo from './containers/AddTodo';
import MenuFilter from './containers/MenuFilter';
import VisibleTodoList from './containers/VisibleTodoList';



class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.addItemHandler = this.addItemHandler.bind(this);
    this.state = {
      todo: ['item 1', 'item 2', 'item 3'], 
    };
  }


  public addItemHandler = (newItem: string) => {
    console.log(newItem);
    if(!newItem.trim()) {
      return;
      
    }

    const newTodo: string[] = this.state.todo.concat(newItem);

    if (this.state.todo !== newTodo ) {
      this.setState({todo: newTodo});
    }
    
  }


  public render() {
    return (
      <div className="App">
        <div className="App-intro">
          <AppTodo add= {this.addItemHandler}/>
          <VisibleTodoList todo = {this.state.todo}/>
          <MenuFilter/>
        </div>   
      </div>
    );
  }
}

export default App;
