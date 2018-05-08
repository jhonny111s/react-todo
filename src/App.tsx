import * as React from 'react';

import './App.css';

import AppTodo from './containers/AddTodo';
import MenuFilter from './containers/MenuFilter';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-intro">
          <AppTodo/>
          <VisibleTodoList/>
          <MenuFilter/>
        </div>   
      </div>
    );
  }
}

export default App;
