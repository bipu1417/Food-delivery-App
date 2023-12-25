VS Code use 
Emmet - It generates some code for you/dev. Gives smooth developer experience

CDN - Content Delivery Network

Library’s are hosted in here, so that dev can use it just by adding the CDN link into the code


CrossOrigin - 


React.development.js - Core React File which has the core code for react functionalities

React-dom.development = this is the bridge between React and browsers - because React is being used by Browsers and so many things like android.

So to connect to each different DOM we have this.

React.createElement = takes 3 params - 
1. tagName
2. Attributes like {style=“font:34em” or id: “xyz”}
3. HTML Vaues

[
Const heading = React.createElement(“h1”, {}, “Hello World”);

Console.log(heading); // Returns object - reactElement - becomes html which browser understands

{} -> provide attribute to the tag defined

2nd param - props

3rd param - Children

Const heading = React.createElement(“h1”, {id:”test”}, “Hello World”);
Const root = ReactDOM.createRoot(document.getElementById(“root”));
Root.render(heading);
]

*** When to use React/ReactDOM to create element - 
We have to inform React what is the root to do DOM manipulation or render things.

When we are creating something and rendering inside that -  this is the task of ReactDOM
So, have to use reactDOM to create the elements - to put things on browser or DOM


//———————
To Create nested HTML Tags using React 
//——————————

Const parent = React.createElement(
“div”,
{id: “parent”},
React.createElement(“div”, {id: “child”},
React.createElement(“h1”, {}, “I am an H1 Tag”)
)
);

//To create siblings or multiple children under same parent

Const parent = React.createElement(
“div”,
{id: “parent”},
React.createElement(“div”, {id: “child”},
[ React.createElement(“h1”, {}, “I am an H1 Tag”), 
React.createElement(“h2”, {}, “I am an H2 Tag”) ]
)
);

But Using JSX, will make things easier.

***JSX

*** If in Index.html file - div with id = root is already having any other element or tag inside that then React will replace the content and refresh it very very fast.

React is not a framework - it’s a library 
Reason - It can work inside any portion of Application. Like you can apply react only on a single tag of the web browser.




