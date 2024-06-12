
import React, {useState,useEffect} from "react";

function MyComponent () {

const [count, setCount]= useState(0);
const[ color, setColor]= useState("green");
const [height, setHeight]= useState(window.innerHeight);
const[width, setWidth]= useState(window.innerWidth);

useEffect(()=>{
    document.title=`count: ${count} ${color}`; 
} ,[count ,color]);

function addCount(){

    setCount(c=>c+1);
}
function changeColor(){
  setColor(c=> c==="green" ? "red" : "green");
}

useEffect (()=>{
    window.addEventListener("resize",handleResize);

    return () =>{
        window.removeEventListener("resize", handleResize);
    }
},[])

function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}

return (
    <>  
    <p style={{color: color}}>Count : {count} </p>
    <button onClick={addCount}>Add </button>
    <button onClick={changeColor}>Change Color</button> 

    <p> window width : {width} px</p>
    <p> Window height : {height}px </p>
    </>
);


}

export default MyComponent;