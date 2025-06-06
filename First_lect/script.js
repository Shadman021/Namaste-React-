// const heading = document.createElement("h1");
// heading.innerHTML = "hello world";
// const root = document.getElementById("root");
// root.appendChild(heading);

// const heading = React.createElement("h2", {}, "Hello react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div",
    {id: "parent"},[  [React.createElement("h2", {id: "child1"},"This is child inside the parent element"), React.createElement("h3", {id: "child2"},"This is sibling")],

  [React.createElement("h2", {id: "child3"},"This is child inside the parent element"), React.createElement("h3", {id: "child4"},"This is sibling")]]
   
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);