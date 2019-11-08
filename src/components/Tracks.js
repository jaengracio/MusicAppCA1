import React from 'react';

class Tracks extends React.Component {

constructor(){
  super();
  this.state = {
    tracks: [],
  };
}

componentDidMount() {
  fetch('https://api.deezer.com/chart/0/tracks')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    this.setState({ tracks: data.data })
  })
  .catch(console.log)
}

  render(){
    const a = this.state;
    const topTracks = a.tracks.map((tracks) => (
          <li key={tracks.title}>{tracks.title}</li>
    ));

    return(
      <div>
        <ol>
          {topTracks}
        </ol>
      </div>

    )
  }

}

export default Tracks;
