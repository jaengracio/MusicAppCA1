import React from 'react';
import ArtistAlbum from '../components/ArtistAlbum';

class AlbumList extends React.Component {
   render() {
      return (<div className="container">
         <div className="row">
            <h1>Top 100 Albums</h1>
         </div>
         <br/>
         <ArtistAlbum amount={100} type={'album'}/>
      </div>);
   }
}

export default AlbumList;
