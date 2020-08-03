import React from 'react';
import './Catalog.css';

class Catalog extends React.Component {
  render(){
    return (
      <div>
        <h2 className={this.props.catalog.selected ? "selected" : ""} style={{textTransform: 'capitalize'}} onClick={() => {this.props.onclicked(this.props.catalog.id)}}>{this.props.catalog.title}</h2>
      </div>
    );
  }
}

export default Catalog;
