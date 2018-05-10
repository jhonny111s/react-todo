// debe ser asi para que se reconozcan los types
import * as React from 'react';
import Link from '../components/Link'


// compont tiene dos parametros props y states, son objetos
class MenuFilter extends React.Component <any,any> {

  constructor(props: any) {
    super(props);
    this.filterChange = this.filterChange.bind(this);
  }


  public filterChange = (event:any) => {
    this.props.change(event.target.id);
  }

  public render() {
    return (
        <div>
            <p>Menu filter</p>
            <Link id={"SHOW_ALL"} active = {this.props.filter === 'SHOW_ALL'} click={this.filterChange}> All </Link>
            <Link id= {"SHOW_ACTIVE"} active = {this.props.filter === 'SHOW_ACTIVE'} click={this.filterChange}> Active </Link>
            <Link id= {"SHOW_COMPLETED"} active = {this.props.filter === 'SHOW_COMPLETED'} click={this.filterChange}> Complete </Link>
        </div>
    );
  }
}

export default MenuFilter;