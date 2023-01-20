import React from "react";
import { movies } from "../data";

function Movies() {
  
  const moviesDetail = movies.map((item)=>{

    return(
      <div>
        {item.title}
        {item.time}
        <ul>
         {item.genres.map((data) => <li>{data}</li>)}
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
