import React from "react";
import { movies } from "../data";

function Movies() {
  
  const moviesDetail = movies.map((item,index)=>{

    return(
      <div key={"movies_"+ index}>
        {item.title}
        {item.time}
        <ul>
         {item.genres.map((data,index) => <li key={'movielist_'+index}>{data}</li>)}
        </ul>
      </div>
    )
  })

  return (<div>
    <h1>Movies Page</h1>
     {moviesDetail}
    
  </div>);
}

export default Movies;
