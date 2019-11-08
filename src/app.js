import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import ArtistList from './pages/ArtistList';
import AlbumList from './pages/AlbumList';
import Credits from './pages/Credits';
import Nav from './components/Nav';


//Apps class routes the components
class App extends React.Component{
  render() {
      return(
      <>
      <BrowserRouter>
         <Nav/>

         <div className="row greetings">
            <div className="container">
               <h1>Welcome to KnowMusic!</h1>
               <p>
               This is a very simple website about music.
               <br/>
               See the top 100 artists and 100 albums.
               <br/>
               Find out more about your favourite artists.
               </p>
            </div>
         </div>

         <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/artists" component={ArtistList}/>
            <Route path="/albums" component={AlbumList}/>
            <Route path="/credits" component={Credits}/>
         </Switch>
      </BrowserRouter>
      <br/>
      </>
);
  }
}

export default App;
