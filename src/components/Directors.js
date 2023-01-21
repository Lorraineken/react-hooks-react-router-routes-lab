import React from "react";
import { directors } from "../data";

function Directors() {

 const directorsDetails = directors.map((data,index) =>{
  return(
  <div key={'directors_'+ index}>
    {data.name}
    <ul>
     {data.movies.map((item,index) => <li key={'directorsList_'+ index}>{item}</li>)} 
    </ul>
  </div>
  )
 })

  return (
  <div>
    <h1>Directors Page</h1>
    {directorsDetails}
    </div>);
}

export default Directors;
