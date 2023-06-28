import React from "react";
import "../styles/tailwind.css"
import { Nav } from "./Nav";
import { Word } from "./Word";
import { Noun } from "./Noun";

const App = () => {
     return(
          <main className="font-['Space_Mono']">
               <Nav/>
               <Word/>   
               <Noun/>
          </main>
     )
}

export {App}