import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import ProfileUser from "../components/assets/User.png";
import { Link, useParams } from "react-router-dom";
import cardData2 from "../dummy/FakeCardsTour";
import profile from './assets/user 2.png'
import logout from './assets/logout 1.png'



function ProfileDropdown({ handleLogout }) {
  const { id } = useParams();
  const selectorId = cardData2.find((Nico) => Nico.id === id);
  const { quantity } = useParams();
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="profile-dropdown" className="" style={{ border: "none" }}>
        <Image src={ProfileUser} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <div className="d-flex align-items-center">
            <Image src={profile} className="mr-2" width={16} height={16} />
            <Link style={{ textDecoration: "none", color: "black", marginLeft: '15px'}} to={"/ProfilePages"}>
              Profile
            </Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="d-flex align-items-center">
            <Image src={ProfileUser} className="mr-2" width={16} height={16} />
            <Link style={{ textDecoration: "none", color: "black" }} to={"/WaitingPayment"}>
              Pay
            </Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogoutClick}>
          <div className="d-flex align-items-center">
            <Image src={logout} className="mr-2" width={16} height={16} style={{ marginRight: '15px'}}/>
            Logout
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileDropdown;
