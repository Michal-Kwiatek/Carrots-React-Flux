import React from 'react';

import ProfilesStore from '../stores/ProfilesStore';
import TableRow from './TableRow';

class TableProfiles extends React.Component {
  constructor() {
    super();

    this.state = {
      profiles: ProfilesStore.getAll()
    }
  }

  componentWillMount() {
    ProfilesStore.on("change", () => {

      this.setState({ 
        profiles: ProfilesStore.getAll()
      });
    })
  }


  render() {
    const profiles = this.state.profiles.map( (profile, i) => {
      return <TableRow key = {profile.id} index = {i+1} {...profile}/> ;
    })

    return (
      <table className="table table-bordered">
        <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>Rabbit Name</th>
            <th>Carrots Count</th>
          </tr>
        </thead>
        <tbody>
          {profiles}
        </tbody>
      </table>
    )
  }
}


export default TableProfiles;