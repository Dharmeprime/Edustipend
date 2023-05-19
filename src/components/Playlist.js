import React from "react";
import {FaPlus} from "react-icons/fa"


function Playlist(props){
  return(
    
      
        <div className="title">
          <p>{props.song.title} <FaPlus/></p>
        </div>
        
      
  )
}
export default Playlist;