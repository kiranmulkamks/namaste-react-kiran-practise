import React from "react";
import  ReactDOM  from "react-dom/client";

const homePageTitle ="Home Page";

//creating h1 ReactElement using React
const headingEleReact = React.createElement("h1",{id:"headingIdReact"},"H1 Elemetn using React");

//creating h1 ReactElement using JSX
const headingEleJSX = (<h1 id="headingIdJSX"> 
H1 Element using JSX
</h1>);

//ReactFunctionalComponent 
//Component should startsWith UpperCase letter
const Title = () => (
    <h1>TitleComponenet</h1>
);
//Component composition -> rendering a component inside another component

const HeadingComponenet = () => (
<div>
{homePageTitle}
 <Title />
<h1>H1 Element using REact Functional Componenet</h1>
</div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering reactElement is same for both React & JSX
root.render(headingEleJSX); //root.render(headingEleReact);

//rendering fa unctionalComponent
root.render(<HeadingComponenet />);