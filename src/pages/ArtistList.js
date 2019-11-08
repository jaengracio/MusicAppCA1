import React from 'react';
import ArtistAlbum from '../components/ArtistAlbum';

class ArtistList extends React.Component {
   render() {
      return (<div className="container">
         <div className="row">
            <h1>Top 100 Artists</h1>
         </div>
         <br/>
         <ArtistAlbum amount={100} type={'artist'}/>
      </div>);
   }
}

export default ArtistList;
