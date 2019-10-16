import React from "react";
import Transport from "./components/Transport";
import "./App.css";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="all">
        <Transport />
      </div>
    );
  }
}

export default App;
