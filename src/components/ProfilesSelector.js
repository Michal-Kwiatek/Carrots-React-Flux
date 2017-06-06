import React from 'react';

import * as profileActions from '../actions/ProfilesActions';

class ProfilesSelector extends React.Component {

  handleSelectedChange(e) {
    profileActions.changeSelected(e.target.value);
  }


  render() {
    const { id } = this.props.selectedProfile;

    const options = this.props.profiles.map(profile => {
      return <option key={profile.id}
              value={profile.id}> 
              {profile.name} </option>;
    })

    return (
      <select name="profiles" id="selectProfile"
        value={id}
        onChange={e => this.handleSelectedChange(e)} >
        {options}
      </select >
    )
  }
}


export default ProfilesSelector;