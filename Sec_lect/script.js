import React from "react";
import ReactDOM from "react-dom/client"
const parent = 
  React.createElement("div",{id: "parent", key: 1},[  [
  React.createElement("h2", {id: "child1",key: 2},"This is child inside the parent element"), 
  React.createElement("h3", {id: "child2", key: 3},"This is sibling")],

  [React.createElement("h2", {id: "child3", key: 4},"This is child inside the parent element"),
  React.createElement("h3", {id: "child4", key: 5},"This is sibling")]]
   
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);