import React, { Component } from "react";

export default class Course extends Component<any,any> {
  render() {
    const {id,title} = this.props.instance;
    return <tr><td> {id} </td> <td>{title} </td> <td><button onClick={()=> this.props.remove(id)}> Remove</button></td></tr>;
  }
}
 