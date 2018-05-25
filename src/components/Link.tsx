import * as React from 'react';

interface LinkPropsInterface {
  id: string,
  active: boolean
  click(id: string): void
}

// compont tiene dos parametros props y states, son objetos
class Link extends React.Component <LinkPropsInterface,{}> {


  public render() {
    return (
        <button
        id = {this.props.id}
        onClick = {this.onClickFilter}
        disabled = {this.props.active}
        > 
        {this.props.children} 
        </button>  
    );
  }

  // función para evitar problemas en el render al querer usar arrow function o bind
  private onClickFilter = () => {
    this.props.click(this.props.id);
  }
}

export default Link;