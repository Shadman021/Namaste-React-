// const heading = document.createElement("h1");
// heading.innerHTML = "hello world";
// const root = document.getElementById("root");
// root.appendChild(heading);

const heading = React.createElement("h2", {}, "Hello react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
