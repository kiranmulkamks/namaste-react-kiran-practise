import React from "react";
import ReactDOM from "react-dom";

       //create a element using React.createElement(tag,attributes/props,value)
       //accepts tag which u want to create, attributes, value

       const headingh1 = React.createElement("h1",
       {id:"h1Tag", name:"headingName"},
       "WTF Is h1 tag");

       const headingh2 = React.createElement("h2",{id:"h2Tag"},"WTF Is h2");

       const childDiv = React.createElement("div",{id:"childDiv"}, [headingh1,headingh2]);
       const childDiv2 = React.createElement("divv",{id:"child2"},[headingh1,headingh2]);
       const parentDiv = React.createElement("div",{id:"parentDiv"}, [childDiv,childDiv2]);
       //create a root element using ReactDOM
       const root = ReactDOM.createRoot(document.getElementById("root"));
       console.log(root);
       
       //render a heading in the root
       root.render(parentDiv);

       //create another root element using ReactDOM
       const root2 = ReactDOM.createRoot(document.getElementById("root2"));
       root2.render(parentDiv);