import React from "react";

class Step extends React.Component {
  handleMouse = e => {
    // console.log(e.type);
    if (this.props.mouse) {
      this.props.clickHandler(e);
    }
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.borderColor !== nextProps.borderColor) {
      return true;
    }
    if (this.props.clicked !== nextProps.clicked) {
      return true;
    }
    return false;
  }

  render() {
    let style = {
      width: "36px",
      height: "60px",
      // border: this.props.borderColor ? ` ${this.props.color}` : "5px hidden ",
      backgroundColor: this.props.clicked ? "#6b6e6e" : "#CBCBCB",
      position: "relative",
      borderRadius: "10px",
      margin: 5,
      marginLeft: "10px",
      // zIndex: "3",
      display: "inline-block",
      opacity: "100%"
    };

    let style2 = {
      width: "48px",
      height: "71px",
      // border: this.props.borderColor ? ` ${this.props.color}` : "5px hidden ",
      backgroundColor: `${this.props.bC}`,
      opacity: this.props.borderColor ? "100%" : "0%",
      position: "absolute",
      top: "-18%",
      left: "-45%",
      borderRadius: "10px",
      margin: 5,
      zIndex: "-1",
      marginLeft: "10px",
      display: "inline-block"
    };

    return (
      <div
        data-id={this.props.id}
        style={style}
        onClick={this.props.clickHandler}
        onMouseOver={this.handleMouse}
      >
        <div style={style2}></div>
      </div>
    );
  }
}

export default Step;
