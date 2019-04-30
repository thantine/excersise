import React from "react"
import ReactDOM from "react-dom";

var Hello = () => React.createElement("h3", null, "Hello react test");

ReactDOM.render(React.createElement(Hello), document.getElementById("root"));