import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Logo from "../assets/Icon.png";
import ProfileDropdownAdmin from "../Admin/Dropdwon";
import LoginComp from "../Login";
import RegisterComp from "../Register";
import ProfileDropdown from "../ProfileDropdown";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";


function NavLogAfter() {
  // const {setLoggedIn, isAdmin} = props;
   const [state, dispatch] = useContext(UserContext)
  console.log(state);
  
  const login = state.isLogin;
  const customer = state.role;

  let navigate = useNavigate()

  // const james = JSON.parse(localStorage.getItem("login"))

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("loggedIn");
  //   if (isLoggedIn === "true") {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // }, []);

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

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };

  // const handleAdmin = () => {
  //   setIsAdmin(true);
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem("login");
  //   window.location.href = "/";
  // };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("login");
  //   if (loggedIn) {
  //     window.location.href = "/";
  //   } else if (isAdmin)
  //     window.location.href = "/HomeAdmin";
  // };

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
        <Link to="/"><Image src={Logo}  /></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            {login && customer === "customer" ? (
          <ProfileDropdown handleLogout={handleLogout} />
        ) : login && customer === "admin" ? <ProfileDropdownAdmin handleLogout={handleLogout}/> : (
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavLogAfter;
