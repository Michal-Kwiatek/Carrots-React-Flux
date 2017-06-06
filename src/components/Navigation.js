import React from 'react';
import { NavLink } from 'react-router-dom'


class Navigation extends React.Component {

  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/new" className="navNew" activeClassName="active">
            New Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/edit" className="navEdit" activeClassName="active">
            Edit Profile
          </NavLink>
        </li>
      </ul>
    )
  }
}


export default Navigation;