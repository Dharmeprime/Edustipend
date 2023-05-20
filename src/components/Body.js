import React from "react";
import Playlist from "./Playlist";
import Navbar from "./Navbar"


function Body(){
  return(
    <div>
      <Navbar />
      <section>
        
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 bigfont">
            <h2 className="">Make your party fun!</h2>
            <small className="mb-5">Create your own custom playlist today.</small><br/>
            <button className="btn btn-sm mt-4 mb-5">Create playlist</button>
          
          </div>
          

          <div className="col-md-3 pt-2 pb-2 ms-auto text-center playlist" >
            <h6 className="pt-3" style={{color:'#fff'}}>Trending songs</h6>
            <Playlist song={{title: "Unavailable by Davido"}}/>
            <Playlist song={{title: "Hallelujah by Nathaniel Bassey"}}/>
            <Playlist song={{title: "My woman by Wizkid"}}/>
            <Playlist song={{title: "African Queen by 2face"}}/>
            <Playlist song={{title: "Street credibility by 9ice"}}/>
            <button className="btn btn-sm">View more</button>          
          </div>
          
          
        </div>
      </div>
      </section>
    </div>
  )
}
export default Body;