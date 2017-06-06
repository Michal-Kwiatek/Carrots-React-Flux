import React from 'react';

import EditProfileSelected from './EditProfileSelected';
import ProfilesStore from '../stores/ProfilesStore';

class EditProfile extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);     // TO AVOID PROBLEMS WITH 'THIS' IN REMOVE LISTENER
    this.updateSelected = this.updateSelected.bind(this);

    this.state = {
      profiles: ProfilesStore.getAll(),
      selectedProfile: ProfilesStore.getSelected()
    }
  }

  updateState() {
    const newState = {
      profiles: ProfilesStore.getAll(),
      selectedProfile: ProfilesStore.getSelected()
    }

    this.setState(newState);
  }

  updateSelected() {
    this.setState({ 
      ...this.state, 
      selectedProfile: ProfilesStore.getSelected() 
    });
  }

  componentWillMount() {
    ProfilesStore.on("profilesUpdate", this.updateState )    // IMMUTABLE
    ProfilesStore.on("selectedChange", this.updateSelected )   // IMMUTABLE
  }

  componentWillUnmount() {
    ProfilesStore.removeListener("profilesUpdate", this.updateState);
    ProfilesStore.removeListener("selectedChange", this.updateSelected);
  }

  render() {
    let body;

    if (this.state.profiles.length && this.state.selectedProfile) {
      body = <EditProfileSelected {...this.state} />;
    } else {
      body = <p>No profiles available to edit</p>;
    }

    return (
      <div className="edit__card card">
        {body}
      </div >
    )
  }
}


export default EditProfile;