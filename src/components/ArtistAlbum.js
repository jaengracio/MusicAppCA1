import React from 'react';

// returns a list of artists
class ArtistAlbum extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         artistAlbum: [],
         amount: this.props.amount, //takes a value to limit the amount of images to display
         type: this.props.type, //states whether displaing an artist or album
      };
      this.afterAPI = this.afterAPI.bind(this); //must bind class methods
      this.errorAPI = this.errorAPI.bind(this);
   }

   //returning two different data from Deezer API: artist and album
   componentDidMount() {
      if (this.state.type === "artist") {
         fetch(`https://api.deezer.com/chart/0/artists?limit=${this.state.amount}`).then(res => this.afterAPI(res)).catch(err => this.errorAPI(err))
      } else if (this.state.type === "album") {
         fetch(`https://api.deezer.com/chart/0/albums?limit=${this.state.amount}`).then(res => this.afterAPI(res)).catch(err => this.errorAPI(err))
      } else {
         console.log("Not an artist or album!");
      }
   }

   afterAPI(res) {
      //returning the results from the fetch method as JSON object
      let data = res.json()
      console.log(data);
      data.then(data2 => (this.setState({artistAlbum: data2.data})))
   }

   errorAPI(e) {
      console.log('error', e)
   }

   render() {
      const musicObjects = this.state.artistAlbum.map((musicObject) => (
      <div className="row artistAlbumRow" key={musicObject.id}>
         {/*checks if type is artist If true, show artist picture.
            If false, check if type is album. If true, show album cover.
            If false, display nothing. */}
         {
            this.state.type === "artist"
               ? <div className="col-5"><img src={musicObject.picture} alt={musicObject.name}/></div>
               : this.state.type === "album"
                  ? <div className="col-4"><img src={musicObject.cover} alt={musicObject.name}/></div>
                  : ""
         }
            {/*checks if type is artist If true, show artist name.
               If false, check if type is album. If true, show album title.
               If false, display nothing. */}
            {
               this.state.type === "artist"
                  ? <div className="col-7"><div className="desc">{musicObject.name}</div></div>
                  : this.state.type === "album"
                     ? <div className="col-7"><div className="desc">{musicObject.title}</div></div>
                     : ""
            }
      </div>));

      return (
         <div className="row">
            <div className="col-md">{musicObjects.slice(0,50)}</div>
            <div className="col-md">{musicObjects.slice(50,100)}</div>
         </div>
      )
   }
}

export default ArtistAlbum;
