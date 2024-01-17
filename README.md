# NamasteReactCourse

# PARCEL :
- Dev Build
- Local Server
- HMR - Hot Module Replacement - Instant refresh
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of files
- Bundling of files
- Compress files
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic 
- Error Handling
- HTTPS hosting
- Tree Shaking - remove unused code

# Food Ordering App - Episode 4
/**
 * Planing for Namaste Food Delivery App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Reastaurant Container
 * - - Reastaurant Cards
 * - - - Image
 * - - - Name of Rest
 * - - - Star rating
 * - - - cuisine
 * - - - delivery time
 * Footer
 * - Copyright
 * - Disclaimer
 * - Links/Address/Contacts etc.
 * 
*/

# Redux ToolKit
 - Install @reduxjs/toolkit and react-redux
 - Build our own store
 - Connect our store to our App
 - Create slice [Cart Slice]
 - Dispatch(Action)
 - Selector read the data


# Episode 1:
————-

* VS Code use 
* Emmet - It generates some code for you/dev. Gives smooth developer experience

* CDN - Content Delivery Network

Library’s are hosted in here, so that dev can use it just by adding the CDN link into the code


* CrossOrigin - 


* React.development.js - Core React File which has the core code for react functionalities

* React-dom.development = this is the bridge between React and browsers - because React is being used by Browsers and so many things like android.

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

* When to use React/ReactDOM to create element - We have to inform React what is the root to do DOM manipulation or render things.

When we are creating something and rendering inside that -  this is the task of ReactDOM
So, have to use reactDOM to create the elements - to put things on browser or DOM


//———————
* To Create nested HTML Tags using React 
//——————————

Const parent = React.createElement(
“div”,
{id: “parent”},
React.createElement(“div”, {id: “child”},
React.createElement(“h1”, {}, “I am an H1 Tag”)
)
);

* To create siblings or multiple children under same parent

Const parent = React.createElement(
“div”,
{id: “parent”},
React.createElement(“div”, {id: “child”},
[ React.createElement(“h1”, {}, “I am an H1 Tag”), 
React.createElement(“h2”, {}, “I am an H2 Tag”) ]
)
);

But Using JSX, will make things easier.

* JSX

* If in Index.html file - div with id = root is already having any other element or tag inside that then React will replace the content and refresh it very very fast.

* React is not a framework - it’s a library 
* Reason - It can work inside any portion of Application. Like you can apply react only on a single tag of the web browser.

# Episode 2:
—————
* can react make production ready app or make our app fast?
——> No. React can’t make our app fast. It is all our other dependencies jar of other packages.

* What is NPM?
—> NPM does not stand for Node Package manager. It does not have a full form.
It manages packages.

* Package.json : This is a configuration file for NPM. Keeps track of version installed in our app.

* Most important package in our project : 
—————————————————
It is a Bundler - Whole code needs to be bundled - [ web pack/parcel/wit ] - create react app behind the scene uses web pack to build things up.

There are 2 kinds of dependencies our app can have - 
1. Dev Dependencies - required in a development phase
2. Normal Dependency - used in production also

This is why we use -D param in NPM command
Comand -> npm install -D parcel

* Caret vs Tilde sign in package.json file :
———————————————————
Caret(^) - This can update minor version of the packages
Tilde(~) - This can update major version of the packages

This is always better to use Caret in package.json. I won’t break our app even it will get some update.

* Package-lock.json :  
This keeps a track of exact version of packages
Integrity : with SHA hash keys - to verify the same version in local & production as well.

* Transitive dependency :
Though I have installed only PARCEL - but node modules contains many other folders of code. Because of My APP has Dependency on Parcel but Parcel can have it’s own dependency’s too. And those dependent packages can have their own dependencies. This is called Transitive Dependency.


* NPM vs NPX :
Npm and npx are different. When we install any package we use npm command to install. Which does not execute the package. It fetches the package with required dependencies.

But NPX use to execute the mentioned package in the command.

* Error 1: Browser scripts cannot have imports or exports
Solution : Add type=“module” while injecting the Javascript file in HTML file.
Add the type="module" attribute to the <script> tag.
E.g. - <script type=“module” src=“./App.js”></script>

# PARCEL :
- Dev Build
- Local Server
- HMR - Hot Module Replacement - Instant refresh
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of files
- Bundling of files
- Compress files
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic 
- Error Handling
- HTTPS hosting
- Tree Shaking - remove unused code
- Different dev & prod bundles

# PARCEL DOCUMENTATION - Read it.

# While building the code for Production using Parcel - 
Command - npx parcel build index.html

Check package.json if entry point is different then remove or make it same.
Otherwise it will throw error while building.

Dev builds are loaded from Dist and parcel-cache folder.

*** browsers list - maintain browser version - which browser will execute the code
“browserslist”: [
“last 2 versions”
]


### EPISODE 3:
—————
* Script to execute the project in dev mode - to avoid running npx command every time 
Setup the scripts in package.json file and use the command npm run “ScriptTag to execute”

Like - npm run start or npm run build or npm start

* React Element :
——————-
 JSX -> Javascript syntax to create react element - makes developers life easier. - JSX isn’t html in js. It is html like syntax. JSX is transpiled to React Element and then react element is rendered as an HTML element.

Const jsxHeading = <h1> Namaste Javascript </h1>;

JSX code is transpired before it reaches to JS Engine. JS Engine receives the code which it can understand.
Transpile - converted to the understandable code & It is done by PARCEL [Babel package]

* BABEL - Javascript compiler or transpiler

JSX -> Converted to React create Element -> then rendered as an HTML Element

BABEL is doing all that task of conversion.

* READ BABEL DOCUMENTATION - Read it

* JSX Vs HTML -
HTML accepts class attribute but JSX accepts className attribute.
JSX accepts only Camel Case attributes 

* TASK
Find out various tags of attributes in JSX

Like - image src=“”, anchor

### To write multi-line JSX - the code has to be enclosed within parenthesis like 
Const heading = (<h1>Namaste JS </h1>);

# REACT COMPONENT
Two types of component -
1. Class Based Component - OLD way of writing code - uses JS class
2. Functional Component -NEW way of writing code - uses JS functions

* What is a React Functional Component?
It is just like JS function. But First Letter must be in Capital Letter.
Functional Component is a function which returns some JSX code or react element.

E.g. - const HeadingComponent = () => {
	return <h1>Namaste react Functional Component </h1>;
}

This is same as below -

ShortHand Syntax - const fn = () => <h1>Namaste react Functional Component </h1>;

OR,
const HeadingComponent = () => {
	<h1>Namaste react Functional Component </h1>;
}

OR you can use Normal Function too but you must have to return -

const HeadingComponent = function () {
	return(
	<h1>Namaste react Functional Component </h1>;
	);
};

Both are Functional Component.

* How to render functional components ?
root.render(< HeadingComponent />);

* Component Composition :
Using a Component inside another component -
e.g. - const Title = () => (
    <h1 className="child2" tabIndex={5}>Namaste React Title</h1>
);

const HeadingComponent = () => (
    <div id="container">
    <Title />
    <h1 className="child1" tabIndex={5}>Namaste React Component</h1>
    </div>
);

* You can execute any JavaScript code inside two Curly Braces in JSX

Javascript inside JSX - 
Const title = “Namaste Biplab”;

Const HeadingCompoenent = () => {
	<div id="container">
	{title}
    <Title />
    <h1 className="child1" tabIndex={5}>Namaste React Component</h1>
    </div>
}

JSX prevents malicious attacks - like cross-site scripting. Always sanitise code before execution.

* We can call JS Function or Functional Component	in same way.
E.g. - 
Const Title = () => (
	<h1>Namaste JS Title </h1>
);

Const HeaadingComponent = () => (
	{Title()}
	<Title />
	// These both are same
	<h1>Inside Heading Component </h1>
);


### EPISODE 4 : Talk is Cheap, Show me the code
—————————————————————
Plan for building FrontEnd App :
1. You should exactly know what you are going to build
2. What is the process of building it
3. Layout or design


CSS using Javascript :
Const stylecard = {
	backgroundColour : “yellow”
};
 And then in JSX calls this using curly braces.
Like style = {styleCard}

Style in JSX accepts Javascript objects. 

* PROPS :
	To pass data into component dynamically we use props aka properties. These are just normal argument to functions.
Props are Object. Whatever arguments user passes to a Component - props will bundle that and store as an object.

Like -
<ResComponent resName=“KFC” cuisine=“Burger, FastFood”/>

Here in component -
Const RestComponent = (props) => {
	console.log(props);
	return (
		<h1>Heading Test</h1>
);
};

This will print the arguments passed over component calls.

You can de-structure the props on the fly like below -

Const RestComponent = ({resName, cuisine}) => {
	console.log(props);
	return (
		<h1>Heading Test</h1>
);
};

This is similar to do like this -
Const {resName, cuisine} = props;

* CONFIG-DRIVEN UI [System Design Interview in FrontEnd]:
=> UI is basically driven by config which will be needed from BackEnd. UI will be controlled by the data which will be sent by BackEnd.

* Optional Chaining :
Const {name, cuisines, costFortwo} = resData?.data;

* Render Cycle OPTIMISATION [importance of using KEYS]: whenever looping over any data for the component - always have to provide key attributes.

When there are components at the same level - React optimises Render Cycle. If there are no unique ids then react will re-render all the components again. Because react won’t understand which is the new component.
So, if you add key to the component then react can easily understand the newly added component. And it will render only that one.

REACT itself recommend not to use index as key.
*** Not using keys <<<<<<< index as keys <<<<<<<<<<<< unique ids as key [BEST practices]
List.map(variable, index)

Episode 4 code :

/**
 * Planing for Namaste Food Delivery App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Reastaurant Container
 * - - Reastaurant Cards
 * - - - Image
 * - - - Name of Rest
 * - - - Star rating
 * - - - cuisine
 * - - - delivery time
 * Footer
 * - Copyright
 * - Disclaimer
 * - Links/Address/Contacts etc.
 * 
*/


### EPISODE 5 :
———————-
Folder structure -> src/components/

Never keep your hardcoded data in Component file.
Hardcoded URL / Strings/ Logos etc.

# There are 2 types of import and export -
1. Default export/import - you use default export only once in a single file.
	e.g. Export default Header;
2. Named export/import - basically when you have to export multiple things from a single file we use this.
	e.g. export const LOGO_URL = “https:www.oracle.com”;
	Way to import named export - import { CDN_URL } from "../utils/constants";

# H/W - Can we use Named export along with default export???

TO FILTER THE RESTAURANTS BASED ON AVGRATING > 4
resList = resList.filter((res) => res.data.avgRating > 4);

* REACT HOOKS : ( Normal JS utility Functions )
———————
State variable - super powerful variable - useState()

Normal Variable vs Hooks - Normal variable won’t auto refresh based on data changes but react hook does.

# Two Very important Hooks -
1. useState() - use to generate super powerful state variable in react
	To use this first import this as named import 
	- import { useState } from “react”;
	- maintain the state of your components
	- you can’t modify these variable as normal JS variables. To modify hooks there is a second parameter in the declaration of hooks.
	- e.g. const [ resList, setResList ] = useState([]); here setresList will update the variable.
	- Whenever a state variable updates, React Re-Render the component.
2. useEffect() - 
- takes two argument - 
	1. Arrow function - callback function 
	2. Dependency Array
USE : 
- After your render cycle is finished, then only useEffect callback function will be executed.


Actual DOMs are the real TAGs like <DIV>, <IMG>

* VIRTUAL DOM :
VD is the representation of actual Dom.  
It is nothing but normal JS object. 

* Diff Algorithm :
Finds out the difference between two Virtual DOM. ( OLD vs NEW Virtual DOM )
Then it calculate the difference and then finally this will actually update the DOM.

* Reconciliation Algorithm [REACT Fiber] :
Whenever something changes in UI is known as Reconciliation.

* Why react is fast?
Because of efficient Dom manipulation. It has virtual Dom. It uses diff algorithm.
React Fiber - Reconciliation algorithm makes it fast.  React exactly knows what to change in DOM. It updates only the differences between old vs new DOM.
Whenever state variable updates, react triggers reconciliation cycle (react re-renders component)

* MONOLITH Architechture :
Having project with all utilities within it - 
	- API 
	- UI JSP
	- Authentication
	- DB Connection
	- Notification - SMS etc
To make any small changes, whole project has to be used or published.
### Separation of Concerns or Single Responsibility principle - Dividing the whole project into Smaller Micro-services. For each feature having a different project to handle. Each has different job, nothing interfere.

Fetch data - 
	- fetch() - Browser function to call API

*** Shimmer UI - Until the page loads completely, it shows some dummy skeletons of the web page

* Conditional Rendering - using which condition we call the Shimmer UI to show dummy data
# Rendering based on condition is known as Conditional Rendering

    if(restList.length === 0){
        return <Shimmer />
    }

* useState - set function automatically renders the component with the latest values.

* Input box and search  : To track the value of the input box, need to have local variable to store the value of input

### Episode 7 : Routing, Dive deeper into Hooks

* When is the useEffect Hook called?

Ans : 
    0. useEffect will be called whenever the component renders without dependency array. But because useEffect has optional dependency array as second argument, which changes the behaviour of component render.

    1. If we pass empty = [] dependency array to useEffect. Then useEffect is called only once on initial render when the component is loaded.

    2. If we pass with some dependency -> then useEffect will only be called when the dependency changes.

So here what can we have as dependency array?
Ans : Suppose dependency array is [btnName] => then useEffect will be called every time btnName is updated.

### Best Practices :
1. Never use useState outside Functional Component.
2. Always call useState on top of the component.
3. Never create your useState const inside any conditions.
4. Or any Loop/function bcz it is meant to be created inside functional component only.


### ROUTING :
React Router DOM Library

Install react router dom : nam i react-router-dom

* How to use this?
Will create About Us page to understand the concept -

In App.js -
Create routing configuration using createBrowserRouter. Which will maintain some information about routing of pages on specific action.
react-router-dom has one more RouterProvider.
Router provider actually provides the routing configuration to our App.
Import {createBrowserRouter, RouterProvider} from ‘react-router-dom’; 

Const appRouter = createBrowserRouter([
	{
		path: “/“,
		element: <AppLayout />
	},
	{
		path: “/about”,
		element: <About />
	}
]);

After this to work this routing, we have to pass appRouter to render.

*** To handle ERROR React has provided with one HOOK - useRouteError from react-router-dom;
So this will help the user understand the error happened by providing proper error message in UI.

* Children Routes :

We have to keep the Header and Footer Intact and only show the required page in between header and footer.
 ———————
| Header |
 ———————
 ——
 ——
 ——
 ———————
| Footer|
 ———————

We have to push children routes into app layout according to the path provided.

And to provide that feature again react-router-dom comes into the picture with another component - OUTLET

* OUTLET in react - Read it

When you are using REACT, never ever use ANCHOR TAG to navigate.
Because it reloads the whole page to navigate.

* Navigation of pages :
You can navigate to your new page without reloading the whole page.
This concept is known as Single Page Application.

* LINK COMPONENT : which will help to navigate without reloading the whole page.
This link component also comes from react-router-dom as well.

# You can have 2 types of Routing -
1. Client side routing : Here we already loaded pages. Whenever any specific page request comes, the page will be loaded again.
2. Server side routing : make a network call -> requested page will be loaded by server based on the request.

* Dynamic Route :

* How to Write MAP() in JS:
Here is an example of plane items fetching with map iteration -

Suppose you want to print menu names from itemCards, then first track to the exact object where that information is stored.

Like => here in this case - { itemCards[0].card.info.name } is the exact navigation.

<ul>
	{ itemCards.map(item => <li> { item.card.info.name } </li>) }
// Similarly we can write this in simple code without map as well like below
	<li>{ itemCards[0].card.info.name }</li>
	<li>{ itemCards[1].card.info.name }</li>
// To replace these 2 lines with a single MAP we can write like above.
</ul>

* ANOTHER HOOK to Read Params - useParam from react-router-dom

* useParam :
* LINK - key attribute while mapping/looping/filtering has to be in the parent JSX
Link Is a Wrapper over anchor TAG. Behind the scene it uses ANCHOR tag.
Then why we use Link then - So that react can tract the element and it’s rendering. And Browser does not understand LINK. 

* useRouteError : This hook helps to get the error while rendering.


### EPISODE 8 : Lets get Classy

Syntax of Class based component -
	class UserClass extends React.Component {
	render() {
		return(
			========== SOME JSX
		);
	  }
	}

Here extends React.Component will let React know that this is a Class Component.

Class components are a Javascript Class which has some render method that returns some JSX.


How do we receive props in class based Component ?
Ans : 
To receive props in class based component, we have create constructor inside the class and using super keywords, we will catch the props.
Example - 
		class UserClass extends React.Component {
			constructor(props){
				super(props);
				console.log(props.name);
			}
			render() {
			return(
				<h2>Name : {this.props.name}</h2>
				========== SOME JSX
			);
	  	   }
		}

* Why do we have to write super(props)? === TASK R&D
—————————————————————————————————————————

* How do we create state variable in class component?
———————————————————————————————————————————————————————
By creating a variable using this.state like below -
	this.state = {
            count: 0,
			————
			————
        };

So here if multiple state variables will created - all will be in this single state Object.
How do we use the state variable :

class UserClass extends React.Component {
			constructor(props){
				super(props);
				console.log(props.name);
				this.state = {
            			count: 0,
					count2: 0,
        			};
			}
			render() {
			return(
				<h2> Count : {this.state.count}</h2>
				<h2>Name : {this.props.name}</h2>
				========== SOME JSX
			);
	  	   }
		}

### Never ever update state variable directly 

* How do we update State Variable in class component?

<button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
					count2: this.state.count2 + 1,
                    });
                }}>
                    count increase
                </button>

So if we update any one in setState -> it won’t touch any other state variable other than that.

* Life cycle of Class Component :
First - constructor() - called
Then - Render() called

* componentDidMount () :
After render method is called - > componentDidMount() is called in class based Component

* Usecases of ComponentDidMount :
There are somethings that we do after the component is mounted successfully-
1. TO make API call
	WHY ?
	Ans : In react, we do not wait to fetch the API data. React loads the component first and 	then call api and fill data accordingly.
	In functional Component - 
	we do the same thing using useEffect which takes a callback function and one depenedency 	
	array. Like below - 
		useEffect(() => {
			// call the API
		}, []);

	So, similarly in class based component - once the component is mounted then only we do the 
	API call inside componentDidMount();
	
	So, React does not wait for the API to return the data. So that it can load the component 	very fast. 
	
	React RENDER the Component fast -> then make the API call -> then load the DATA

	React Life Cycle diagram 
	- check in the website -> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# IMPORTANT NOTE ON CLASS COMPONENT LIFE CYCLE : 
	If the life cycle contains nested component/multiple Child component within it. Then 
	the lifecycle of the component will be like this -
	1. Parent constructor
	2. Parent Render
	3. Child1 constructor
	4. Child1 render
	5. Child2 constructor
	6. Child2 render
	[ Diff is calculated and Reconciliation is triggered and then ]
	[ React updates the DOM in a SINGLE BATCH ]
	7. Child1 componentDidMount
	8. Child2 componentDidMount
	9. Parent componentDidMount

	This is optimisation of REACT.

	React has TWO PHASE in it’s Life CYCLE :
	Phases are -
	1. Render Phase
		- This is the time when React’s Constructor & Render is being called
	2. Commit Phase 
		- This is the time when React Update the DOM and ComponentDidMount Happens 

	And this is the Reason React is fast.

	Cycles are :
	- MOUNTING
		- constructor
		- render
		- componentDidMount - API Call - set State
	- UPDATE
		- update value to the DOM
		- render again with updated values
		- componentDidUpdate
	- UNMOUNTING
		- componentWillUnmount : called when the component is removed from the UI
		- Here we clear unwanted use of data - setInterval/setTimeOut etc.

		example :
			suppose we have setInterval in componentDidMount which will keep running even if 			we changes the page or unmount the page where we have written setInterval -
		Code :
			componentDidMount(){
				this.timer = setInterval(() => {
				console.log(“Namaste React OP”);
			}, 1000);
			}

			componentWillUnmount(){
				clearInterval(this.timer);
				console.log(“Component Unmount.”);
			}

		To get reference of the set interval we have to use this.variable, so that we can 			refer the variable while unmounting.

		If we do the same thing in useEffect() -
			Then we have to handle that using - a return method like below which will be 				called while unmounting the component. Which follows same life cycle.
			useEffect(() => {
				const timer = setInterval(() => {
				console.log(“Namaste React OP”);
			}, 1000);

			return () => {
				clearInterval(this.timer);
				console.log(“Component Unmount.”);
			}

			}, []);


	### Single Responsibility Principle


# Without this you can’t optimise your app - Very important to SCALE your application :

	Here in lazy loading, we call the component when it requires. To do that instead of import the component using import, we import the component using lazy() function provided 		by react. 	Here importing happens using the component folder location.
		example = const Grocery = lazy(() => import(“./components/Grocery”));
	. Chunking
	. Code Splitting
	. Dynamic Bundling
	. Lazy Loading : 
	. On Demand Loading
	. Dynamic Import

These all are same but different names.

So to break down the code into smaller logical bundles is known as Chunking/Code Splitting/ Dynamic Bundling.

What should be there in these smaller bundles :
Ans : smaller logical chunks

*** Very important : TO HANDLE THE LAZY LOADING ISSUE WE USE - SUSPENSE
You have to wrap the code sing Suspense Component to handle the component Suspend error in Lazy Loading.


### EPISODE 10 : Jo Dikhta hai Wo Bikta Hai : 
	Read About ; SCSS and SASS
	SASS = Syntactically Awesome Style Sheets
	SCSS = 
	And Styled Component : React provides this to write better CSS

# TAILWIND CSS : Tailwind CSS uses POSTCSS to transform CSS into Javascript
	.postcssrc and tailwind.config.js - both we have to configure to use TAILWIND CSS.

	Tailwind provides class names for every CSS that we write.

	When you have use a certain size and if that is not present in tailwind classes - then you write your custom size like below using square brackets
	 <div className="m-4 p-4 w-[200px]">


### EPISODE 11 :  Data is the new OIL


* HIGHER ORDER COMPONENT :

	Def : HOC is a function that takes a component and enhance it then returns the component. Normal JS function.

	HOC is a pure function because it won’t change or modify the code or the behaviour of Component passed to the HOC [ Restaurant ]. It enhances the component or add some on top of it.
	
	Accordion : Expand and collapse Menus

	*** LIFT UP THE STATE :

	1. Controlled Component
	2. Uncontrolled  Component - when it has it’s own state

### Lifting state up - to control the children component - 

### PROPS DRILLING -> Passing values to Nested Children from Parent Component

* USECONTEXT - To access values from any level of nested component to any component.
	
	const data = useContext(UserContext);

	In class based component - how to access useContext Hook. Class based component does not support this.
	here we import the Component and use UserContext.Consumer tag to access.
	takes a callback function and returns some JSX.
	example : 
		import UserContext from ‘./component/UserContext’;
		
		<UserContext.Consumer>
			{(data) => console.log(data.loggedInUser)}
		</UserContext.Consumer>


	**** If we want to use Any value through out our Application - then we can use 					
		UserContext.Provider to broadcast the value. We have wrap the app component using that
Example:

return (
        <UserContext.Provider value={{loggedInUser: userInfo}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    );

* Can we have Nested UserContext.Provider???


### EPISODE 12 :  Lets Build Our Store - REDUX TOOL KIT

* REDUX - 	Redux is not the only library to manage data store.
	Advantage - handling data, managing states
	Redux offers easy debugging.
* Zustand - This is an another library which is used for managing states 		and gaining popularity. Lightweight.


	*** Dispatch an Action :
		const dispatch = useDispatch();

    		const handleAddItem = (item) => {
        
        		dispatch(addItem(item));
    		};

	*** Dispatch an action
        Whatever we'll pass as an argument here - will be accepted as action.payload in the reducer of that slice

	*** Be Careful While Subscribing to the store - subscribe only to the required portion of the store. DO not subscribe the whole store and de-structure it while using.

	*** Never Do Like - 
		const store = useSelector((store) => store); // Here we are subscribing to the whole store.
		const cartItems = store.cart.items;

	*** Always subscribe to the specific part of store like below -
		
		const cartItems = useSelector((store) => store.cart.items);

	In Vanilla Redux : We were not able to mutate the state directly. Storing the value in new State, modify the new state and then return the NEW STATE.
	Like  - Returning was mandatory
		removeItem: (state) => {
			const newState = […state];
			newState.items.pop();
			return newState;
        	},

### IMMER:

	Redux uses IMMER Library to find the diff between mutated state and original state, then returns back the new state which is the immutable state - which I knew copy of the state.
	URL for ref : https://immerjs.github.io/immer/
	
	*** Immer : Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way.
	To Clear the cart 
		RTK recommends to either mutate the state or return a new empty state. 



### EPISODE 13: Time for Test

	* Type of Testing :
		1. Unit Testing
		2. Integration Test
		3. End to End Testing - e2e testing 

	* Libraries to Test- 
		1. React testing Library - RTL - comes with create react-app
			This library uses JEST framework - delightful Javascript testing framework with a focus on simplicity. Uses Babel.

	# Setting up testing in our app
		1. Install React Testing Library
		2. Install JEST
		3. Install Babel Dependencies
		4. Setup babel.config.js - 