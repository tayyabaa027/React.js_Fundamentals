//-------------------------------NAMED EXPORT-------------------------------------
//multiple named export per file*********************
export let name="tayyaba shafqat";
let a=10;

function print() {
     console.log ("named export");
    
}
export {a,print};

export function printer() {
    console.log ("named export");
    
}
//NOT WORK WITH ANONYMOUS FUNC

//--------------------------DEFAULT EXPORT---------------------------------------------------
//only one export default per file******************

// let name="hammad";
// export default name;

export default function(){
    console.log("export defualt");
}

// export default function printing() {
//      console.log ("named export");
    
// }
// function print() {
//      console.log ("named export");
    
// }
// export default print;

