import React from "react";
import "../styles/tailwind.css"
import { Nav } from "./Nav";
import { Word } from "./Word";
import { Description } from "./Description";

const App = () => {
     return(
          <main className="font-['Inter']">
               <Nav/>
               <Word/>   
               <Description/>
          </main>
     )
}

export {App}