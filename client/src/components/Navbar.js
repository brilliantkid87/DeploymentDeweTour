import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Wallpaper from "./assets/image1.png";
import Logo from "./assets/Icon.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import LoginComp from "./Login";
import RegisterComp from "./Register";
import ProfileDropdown from "./ProfileDropdown";
import ProfileDropdownAdmin from "./Admin/Dropdwon";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import CardComponents from "./Cards";
import CardsTours from "./CardsTour";
import FooterComponents from "./Footer";


function NavbarComponents() {
  const [state, dispatch] = useContext(UserContext)
  console.log(state);

  const [cari, setCari] = useState("")
  console.log(cari);


  var login = state.isLogin;
  var customer = state.role;

  let navigate = useNavigate()

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);


  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };


  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    localStorage.removeItem("login");
    window.location.href = "/";
  };


  return (

    <div style={{ position: "relative" }}>
      <Image src={Wallpaper} fluid />
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "100px",
          zIndex: "1",
        }}
      >
        <Link to="/"><Image src={Logo} /></Link>
      </div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "100px",
          zIndex: "1",
        }}
      >
        {login && customer === "customer" ? (
          <ProfileDropdown handleLogout={handleLogout} />
        ) : login && customer === "admin" ? <ProfileDropdownAdmin handleLogout={handleLogout} /> : (
          <>
            <Button
              className="btn border me-2"
              variant=""
              onClick={handleShowLoginModal}
            >
              Login
            </Button>
            <Button
              className="btn bg-warning"
              variant="primary"
              onClick={handleShowRegisterModal}
            >
              Register
            </Button>
          </>
        )}
      </div>
      <div
        style={{ position: "absolute", top: "40%", left: "100px", zIndex: "1" }}
      >
        <h1>Explore</h1>
        <h3>your amazing city together</h3>
        <CardsTours cari={cari} />
      </div>
      <div
        style={{ position: "absolute", top: "65%", zIndex: "1", width: "100%" }}
        className="input-group"
      >
        <InputGroup className="mb-3 m-auto" style={{ width: "80%" }}>
          <Form.Control
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon2"
            onChange={(e) => { setCari(e.target.value) }}
          />
          <Button
            className="bg-warning"
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
      </div>
      

      <LoginComp
        showModal={showLoginModal}
        handleCloseModal={handleCloseLoginModal}
        // handleLogin={handleLogin}
        // handleAdmin={handleAdmin}
        // setIsAdmin={setIsAdmin}
        handleLogout={handleLogout}
      />
      <RegisterComp
        showModal={showRegisterModal}
        handleCloseModal={handleCloseRegisterModal}
      // handleLogin={handleLogin}
      />
    </div>
  );
}

export default NavbarComponents



