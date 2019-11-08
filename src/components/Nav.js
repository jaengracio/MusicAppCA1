import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
render(){
   return(
      <nav className="navbar navbar-expand-lg navbar-light myNav">
         <div className="navbarBrand">KnowMusic</div>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggler" aria-controls="navToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navToggler">
           <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                  <Link className="nav-link navLink" to="/">Home</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link navLink" to="/artists">Top 100 Artists</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link navLink" to="/albums">Top 100 Albums</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link navLink" to="/credits">Credits</Link>
              </li>
           </ul>
         </div>
      </nav>
   );
}
}
export default Nav;
