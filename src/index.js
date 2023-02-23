import React from "react";
import ReactDOM from "react-dom";

const name = "Pb7";
const number = 7;
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
/* index.js hooche js file
jetar bhetore amra html likhte parchi using jsx
abar  html tar bhetorei amra js likhte  parchi using curly brackets
e.g.    <p>Your lucky number is {number}</p>
but amra normal js code likhte parbona like
if(...){}
  else {...}
as eiguno statement
amra expression use korte parbo curly braces{} r bhetore
but statement or code jeta computer ke khatacche ota use korte parbona 
as if statement computer ke chech korte bolche i.e. lhs === rhs kina
so computer khatche so we cant use statements in jsx file
*/
