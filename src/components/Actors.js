import React from "react";
import { actors } from "../data";

function Actors() {

const actorsDetails = actors.map((actor,index) =>{
  return (
    <div key={'actors_'+ index}>
      {actor.name}
      <ul>
        {actor.movies.map((item,index) => <li key={'actorsList_'+index}>{item}</li>)}
      </ul>
    </div>
  )
})

  return (<div>
    <h1>Actors Page</h1>
    {actorsDetails}
  </div>);
}

export default Actors;
