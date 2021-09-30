import React, { Component } from "react";
import Course from "../course/course";

export default class Courses extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      courseList: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => this.setState({ courseList: result }));
  }

  render() {
    const { courseList } = this.state;

    if (courseList !== undefined) {
      return (
        <div>
          <table className="table">
            <tbody>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Action</th>
              </tr>
              {courseList.map((couresname: any) => {
                console.log(couresname);
                return (
                  <Course
                    instance={couresname}
                    key={couresname.id}
                    remove={this.remove}
                  ></Course>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>Empty Page</div>;
    }
  }

  remove = (id: number) => {
    console.log("Remove id");
    let index = this.state.courseList.findIndex((d: any) => d.id === id); //find index in your array
    this.state.courseList.splice(index, 1); //remove element from array
    this.setState({ courseList: this.state.courseList });
  };
}
