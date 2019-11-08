import React from 'react';

class Genre extends React.Component {

constructor(){
  super();
  this.state = {
    genres: [],
  };
}

componentDidMount() {
  fetch('https://api.deezer.com/genre')
  //returning the results from the GET method as JSON object
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    this.setState({ genres: data.data })
  })
  .catch(e => console.log('error', e))
}

  render(){
    const a = this.state;
    const allGenre = a.genres.map((genres) => (
          <li key={genres.name}>
              {genres.name}
          </li>
    ));

    return(
      <div>
        <ul>
          {allGenre}
        </ul>
      </div>

    )
  }

}

export default Genre;
