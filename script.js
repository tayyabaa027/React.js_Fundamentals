//------------------ELEMENT CREATION without jsx----------------------------------------
// const h1=document.createElement("h1");
// h1.innerHTML=`<i>hellowww world </i>`;
// document.body.appendChild(h1);


//===========================IMPORT======================================

import chacha,{a,name,printer,print as hello} from "./app.js";

console.log(`${name}\n${a}`);
hello();
printer();
chacha();//export default

//-----------------------------JSX------------------------------------

// import { createRoot } from "react-dom/client";

// const element = <i>Hello World</i>;

// function Runworld() {
//     return element;
// }

// const root = createRoot(document.getElementById("root"));
// root.render(<Runworld />);