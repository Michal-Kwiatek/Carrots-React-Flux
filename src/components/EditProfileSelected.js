import React from 'react';

import ProfilesSelector from './ProfilesSelector';
import ButtonsGroup from './ButtonsGroup';

import * as profileActions from '../actions/ProfilesActions';

class EditProfileSelected extends React.Component {

  handleSelectedChange(e) {         
    profileActions.changeSelected(e.target.value);
  }

  handleDeleteProfile() {
    let question = `Are you sure that you want to remove ${this.props.selectedProfile.name}`;
    let sure = window.confirm(question);      // eslint-disable-line no-alert

    if(sure) {
      profileActions.deleteSelected();
    }
  }

  render() {
    const { name, carrotsCount } = this.props.selectedProfile;
 
    return (
      <div>
        <h3 className="card-header card-info">
          Editing: {name}
        </h3>
        <div className="card-block">
          <label>Profile: </label>
          <ProfilesSelector 
          selectedProfile={ this.props.selectedProfile }
          profiles={ this.props.profiles }/>
          <p>Carrots count: {carrotsCount}</p>
          <ButtonsGroup />
          <button onClick={()=> this.handleDeleteProfile() } className="btn btn-danger"> Delete profile</button >
        </div >
      </div >
    )
  }
}


export default EditProfileSelected;