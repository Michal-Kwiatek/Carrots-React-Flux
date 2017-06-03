import React from 'react';

class EditProfile extends React.Component {

  render() {
    return (
      <div className="edit__card card">
        <h3 className="card-header">
          Edit
      </h3>
        <div className="card-block">
          <label>Profile: </label>
          <select name="profiles" id="selectProfile" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select >

          <p>Carrots count: 5</p>
          <button className="btn btn-danger" > Delete profile</button >

        </div >
      </div >
    )
  }
}


export default EditProfile;