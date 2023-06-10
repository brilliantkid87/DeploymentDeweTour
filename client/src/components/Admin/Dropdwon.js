import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import ProfileUser from "../assets/User.png"
import { Link } from "react-router-dom";
import logout from '../assets/logout 1.png'
import journey from '../assets/journey 1.png'

function ProfileDropdownAdmin(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="profile-dropdown" className="" style={{ border: 'none' }}>
        <Image src={ProfileUser} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <div className="d-flex align-items-center">
            <Image src={journey} className="mr-2" width={25} height={25} />
            <Link to="/incometrips" style={{ textDecoration: 'none', color: 'black', marginLeft: '10px' }}>
              Trip
            </Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={props.handleLogout}>
          <div className="d-flex align-items-center">
            <Image src={logout} className="mr-2" width={25} height={25} style={{ marginRight: '10px'}} />
            Logout
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileDropdownAdmin;