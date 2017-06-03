import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

import NewProfile from './components/NewProfile';
import EditProfile from './components/EditProfile';
import TableProfiles from './components/TableProfiles';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h1 className="app__title">
          Carrots - Admin Panel
        </h1>

        <div className="row createAndEdit">
          <NewProfile />
          <EditProfile />
          <TableProfiles />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
