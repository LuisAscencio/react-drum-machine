import React from "react";

class Step extends React.Component {
  handleMouse = e => {
    // console.log(e.type);
    if (this.props.mouse) {
      this.props.clickHandler(e);
    }
  };

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
        onMouseOver={this.handleMouse}
      ></div>
    );
  }
}

export default Step;
