import React from "react";
import { directors } from "../data";

function Directors() {

 const directorsDetails = directors.map((data) =>{
  return(
  <div>
    {data.name}
    <ul>
     {data.movies.map((item) => <li>{item}</li>)} 
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
