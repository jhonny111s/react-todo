// debe ser asi para que se reconozcan los types
import * as React from 'react';
import Link from '../components/Link'


interface MenuPropsInterface {
  filter: string,
  change(id:string):void
}


// el padre manda como propiedad una funcion y una variable
// este contenedor no tiene ningun estado por eso el vacio
class MenuFilter extends React.Component <MenuPropsInterface,{}> {

  public render() {
    return (
        <div>
            <p>Menu filter</p>
            <Link id={"SHOW_ALL"} active = {this.props.filter === 'SHOW_ALL'} click={this.props.change}> All </Link>
            <Link id= {"SHOW_ACTIVE"} active = {this.props.filter === 'SHOW_ACTIVE'} click={this.props.change}> Active </Link>
            <Link id= {"SHOW_COMPLETED"} active = {this.props.filter === 'SHOW_COMPLETED'} click={this.props.change}> Complete </Link>
        </div>
    );
  }
}

export default MenuFilter;