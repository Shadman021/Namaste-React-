import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS oblect => HTML Elemet(render)
const heading = React.createElement("div", {}, "This is a heading🚀")

const JSXheading = () => (
    <div>
    {heading}
 <h1>this is updated jsx</h1>
 {heading}
 </div>
)
//JSX => Babel transpiles it to React.createElement => reactElement-JS Object => HTML Elmenet(render)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JSXheading />);

