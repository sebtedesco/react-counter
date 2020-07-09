import React from "react";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.counter = this.counter.bind(this);
  }
  counter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="counter-box">
            <div className="counter">{this.state.counter}</div>
            <div
              className="counter-button"
              onClick={() => {
                this.counter();
              }}
            >
              Counter Button
            </div>
          </div>
        </div>
      </>
    );
  }
}
