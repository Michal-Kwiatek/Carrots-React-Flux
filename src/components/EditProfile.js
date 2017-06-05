import React from 'react';

import EditProfileSelected from './EditProfileSelected';
import ProfilesStore from '../stores/ProfilesStore';

class EditProfile extends React.Component {
  constructor() {
    super();

    this.state = this.updateState();
  }

  updateState() {
    const newState = {
      profiles: ProfilesStore.getAll(),
      selectedProfile: ProfilesStore.getSelected()
    }

    return { ...newState };
  }

  componentWillMount() {
    ProfilesStore.on("profilesUpdate", () => {
      const newState = this.updateState();              // IMMUTABLE

      this.setState(newState)
    })

    ProfilesStore.on("selectedChange", () => {
      this.setState({ ...this.state, selectedProfile: ProfilesStore.getSelected() });    // IMMUTABLE
    })
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