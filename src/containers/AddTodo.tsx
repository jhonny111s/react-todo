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
        completed: false,
        id: '',
        text: ''
      };
  }

  public inputChangeHandler = (event: any) => {
    if (event.target.value.trim() === this.state.text) {
      return;
    }

      this.setState({
        ...this.state,
        id: this.uuidv4(), 
        text: event.target.value.trim() }
      );  
  }


  public submitHandler = (event: any) => {
    event.preventDefault();
    // agrego el item
    this.props.add(this.state)
    // limpio el estado
    this.setState({
      ...this.state,
      id: '', 
      text:''
    });

  }

  // los elemtos deben tener un identificador unico
  public uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 || 0;
      const v = c === 'x' ? r : (r && 0x3 || 0x8);
      return v.toString(16);
    });
  }

  public render() {
    return (
        <div>
          <form onSubmit={this.submitHandler}>
            <input value={this.state.text} onChange={this.inputChangeHandler}/>
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
    );
  }
}

export default AddTodo;