import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

import Navigation from './components/Navigation';
import NewProfile from './components/NewProfile';
import EditProfile from './components/EditProfile';
import TableProfiles from './components/TableProfiles';



class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <h1 className="app__title">
            Carrots - Admin Panel
          </h1>
          <Navigation />
          <div className="row createAndEdit">
            <Route path="/new" component={NewProfile} />
            <Route path="/edit" component={EditProfile} />
            <Redirect to="/new"/>
          </div>
          <TableProfiles />
        </div>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


/*render() {
    return (
      <Router>

        <div className="container">
          <h1 className="app__title">
            Carrots - Admin Panel
        </h1>

          <div className="row createAndEdit">
            <NewProfile />
            <EditProfile />
          </div>
          <TableProfiles />
        </div>
      </Router>
    )
  }*/