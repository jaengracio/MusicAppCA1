import React from 'react';

import {Link} from 'react-router-dom';

// This is the homepage and it contains two components.
class Home extends React.Component{
render(){
return(
   <div className="container">
      <div className="row">
        <div className="col-md-4">
            <Link className="homeAlbum" to="/artists">
               <img src="/festival-music-rock-sound-92080.jpg" className="card-img"  alt="Top Artists"/>
            </Link>
        </div>
        <div className="col-md-2">
            <div className="card-body">
               <h4 className="card-title">Top Artists</h4>
               <p>See Top 100 Artists</p>
            </div>
        </div>
        <div className="col-md-4">
            <Link className="homeAlbum" to="/albums">
               <img src="/top-view-photography-of-vinyl-album-case-near-white-tealight-706142.jpg" className="card-img" alt="Top Albums"/>
            </Link>
        </div>
        <div className="col-md-2">
            <div className="card-body">
               <h4 className="card-title">Top Albums</h4>
               <p>See Top 100 Albums</p>
            </div>
         </div>
     </div>
  </div>
);
}
}
export default Home;
