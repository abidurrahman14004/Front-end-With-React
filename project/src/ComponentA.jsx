
import React,{useState,createContext} from "react";


import ComponentB from "./ComponentB";

    export const UserContext = createContext();

function ComponentA() {

const [user, setUser]= useState("sadik");

    return(
        <div className="box">
            <h1>{`My name is ${user}`}</h1>

            <UserContext.Provider value={user}>
            
            <ComponentB user={user}/>

            </UserContext.Provider>

        </div>
    );
    
}

export default ComponentA;