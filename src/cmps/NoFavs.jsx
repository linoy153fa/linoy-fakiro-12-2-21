import React from "react";
import { Link } from "react-router-dom";
export const NoFavs = () => {


  return (
    <div className="no_favs" >
      <div>
      <h1>No Favorites City To Show</h1>
      <Link to={"/"} >
      Back To Main screen
       
      </Link>

      </div>
    </div>
  );
};
