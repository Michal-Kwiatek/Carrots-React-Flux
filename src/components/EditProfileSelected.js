import React from 'react';

import * as profileActions from '../actions/ProfilesActions';

import EditProfileOption from './EditProfileOption';


class EditProfileSelected extends React.Component {

  handleSelectedChange(e) {             
    profileActions.changeSelected(e.target.value);
  }

  handleDeleteProfile() {
    profileActions.deleteSelected();
  }

  render() {
    const { id, name, carrotsCount } = this.props.selectedProfile;
    const options = this.props.profiles.map(profile => {
      return <EditProfileOption key={profile.id}  {...profile} />;
    })

    return (
      <div>
        <h3 className="card-header">
          Editing: {name}
        </h3>
        <div className="card-block">
          <label>Profile: </label>
          <select name="profiles" id="selectProfile"
            value={id}
            onChange={e => this.handleSelectedChange(e)} >
            {options}
          </select >
          <p>Carrots count: {carrotsCount}</p>
          <button onClick={()=> this.handleDeleteProfile() } className="btn btn-danger"> Delete profile</button >
        </div >
      </div >
    )
  }
}


export default EditProfileSelected;