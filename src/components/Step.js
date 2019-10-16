import React from "react";

class Step extends React.Component {
  render() {
    let style = {
      width: "35px",
      height: "60px",

      backgroundColor: this.props.clicked ? "#6b6e6e" : "#CBCBCB",
      border: this.props.borderColor
        ? `${this.props.color}`
        : "3px solid white",
      borderRadius: "10px",
      margin: 5,
      display: "inline-block"
    };

    return (
      <div
        data-id={this.props.id}
        style={style}
        onClick={this.props.clickHandler}
      ></div>
    );
  }
}

export default Step;
