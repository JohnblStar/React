import React, { Component } from "react";


class Subject extends Component { //제목(헤더)
    render() {
      return (
        <header>
          <p className="mainText">
            {this.props.title}
          </p>
        </header>
      );
    }
  }

export default Subject;