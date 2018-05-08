/* 
 - Como funciona, aqui deberia existir una logica o proveer datos y/o comportamientos a otros componentes
 - usualmente tiene estados
*/


// debe ser asi para que se reconozcan los types
import * as React from 'react';

// compont tiene dos parametros props y states, son objetos
class AddTodo extends React.Component <any,any> {

  constructor(props: any) {
    super(props);
      this.inputChangeHandler = this.inputChangeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.state = {
        item: ''
      };
  }

/*   public shouldComponentUpdate(nextProps:any, nextState:any) {
    console.log("nextpro",nextProps, nextState);
    console.log("states",nextState.item, this.state.item);
    if(nextState.item === this.state.item) {
      return false;
    }
    else {
      return true;
    }
    
  } */

/* public componentWillReceiveProps(nextProps: any) {
  console.log("nextpro",nextProps);
} */

  public inputChangeHandler = (event: any) => {
    console.log("event", event);
    console.log("INPUT", event.target.value);
   
    if (event.target.value.trim() === this.state.item) {
      return;
    }

      this.setState({item: event.target.value.trim() });  
  }

  public submitHandler = (event: any) => {
    event.preventDefault();
    console.log("hizo click");
    this.props.add(this.state.item)
    this.setState({item:''});

  }

  public render() {
    return (
        <div>
          <form onSubmit={this.submitHandler}>
            <input value={this.state.item} onChange={this.inputChangeHandler}/>
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
    );
  }
}

export default AddTodo;