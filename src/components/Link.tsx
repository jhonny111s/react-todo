import * as React from 'react';

// compont tiene dos parametros props y states, son objetos
class Link extends React.Component <any,any> {

  public render() {
    return (
        <button
        id = {this.props.id}
        onClick = {this.props.click}
        disabled = {this.props.active}
        > 
        {this.props.children} 
        </button>

        
    );
  }
}

export default Link;