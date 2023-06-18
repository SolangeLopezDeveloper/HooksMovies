import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import SearchMovies from './SearchMovies';
import {Link, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';

import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
        <SideBar />
        <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route component={NotFound} />
            </Switch>

      
        </div>
    </React.Fragment>
  );
}

export default App;
