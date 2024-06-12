import React, {useState, useEffect, useRef} from "react";




function Component() {

    const ref =useRef("Pizza");
    console.log(ref);


useEffect(()=>{
    console.log("Component Rendered");
});


function handleClick(){
 ref.current++;
 console.log(ref.current);
}

    return(<button onClick={handleClick}> Click Me! </button>);
}

export default Component