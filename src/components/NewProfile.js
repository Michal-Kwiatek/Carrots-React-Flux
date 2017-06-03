import React from 'react';

import * as profileActions from '../actions/ProfilesActions';

class NewProfile extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const { name, carrotsCount } = this.refs;
    
    profileActions.createProfile(name.value, carrotsCount.value);
  }

  render() {
    return (
      <div className="card createProfile">
        <h3 className="card-header">Create new profile</h3>
        <form className="card-block" onSubmit={ (e)=> this.handleSubmit(e) }>
          <div className="formRow">
            <label>Rabbit name: </label>
            <input type="text" name="rabbitName" ref="name" required minLength="3" maxLength="18" id="rabbitName" />
          </div>
          <div className="formRow">
            <label>Carrots count: </label>
            <input type="number" name="carrotsCount" ref="carrotsCount" required min="0" max="10000" id="carrotsCount" />
          </div>
          <input type="submit" className="btn btn-success" value="Create" />
        </form>
      </div>
    )
  }
}


export default NewProfile;