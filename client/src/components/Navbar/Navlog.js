import { Container } from "react-bootstrap";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Logo from "../assets/Icon.png";
import Button from "react-bootstrap/Button";
import LoginComp from "../Login";
import RegisterComp from "../Register";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ProfileDropdown from "../ProfileDropdown";
import ProfileUser from "../assets/User.png"

function NavLog() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

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

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div
      className="bgnav"
      style={{
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar expand="lg">
        <Container>
          <Image src={Logo} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            {loggedIn ? (
              <ProfileDropdown handleLogout={handleLogout} />
            ) : (
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
            <LoginComp
              showModal={showLoginModal}
              handleCloseModal={handleCloseLoginModal}
              handleLogin={handleLogin}
            />
            <RegisterComp
              showModal={showRegisterModal}
              handleCloseModal={handleCloseRegisterModal}
              handleLogin={handleLogin}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavLog;
