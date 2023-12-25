// const heading = React.createElement("h1", {id:"xyz"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//———————
//To Create nested HTML Tags using React 
//——————————

const parent = React.createElement(
"div",
{id: "parent"},
React.createElement("div", {id: "child"},
[ React.createElement("h1", {}, "I am an H1 Tag"),
React.createElement("h2", {}, "I am an H2 Tag") ]
)
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);