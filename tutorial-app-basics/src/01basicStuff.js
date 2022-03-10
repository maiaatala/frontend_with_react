import React from "react"; //i need this to use the const stuff
import ReactDOM from "react-dom"; //need the -dom

//stateles functional compoenent
//always return jsx
// function Greeting() {
//     //need to start with uppercase ?!?! -YES
//     return <h4>first component wooo</h4>;
// }

// const Greeting = () => {
//     return React.createElement("h1", {}, "hello world");
// };

// function Greeting() {
//     return (
//         //ONLY ONE PARENT ELEMENT
//         <div>
//             <h1>Hello World</h1>
//             <h4>hello darkness my old friend</h4>
//         </div>
//     );
// }

function Greeting() {
    return (
        //must have enclosing stuff
        <React.Fragment>
            <div>
                <h1>Hello darkness my old friend</h1>
            </div>
            <article>
                <h3>I came to talk with you again</h3>
                <ul>
                    <li>
                        <a href="#">something else in genius</a>
                    </li>
                </ul>
            </article>
        </React.Fragment>
    );
}

// const Greeting = () => {
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, "hello World")
//     );
// };

// uncomment line if you wanna see newbie stuff
// ReactDOM.render(<Greeting />, document.getElementById("root"));
