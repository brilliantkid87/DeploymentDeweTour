
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import LoginComp from "../components/Login";
// import RegisterComp from "../components/Register";

// function NavbarChild() {
//     const [showLoginModal, setShowLoginModal] = useState(false);
//     const [showRegisterModal, setShowRegisterModal] = useState(false);

//     const handleCloseLoginModal = () => {
//         setShowLoginModal(false);
//     };

//     const handleShowLoginModal = () => {
//         setShowLoginModal(true);
//     };

//     const handleCloseRegisterModal = () => {
//         setShowRegisterModal(false);
//     };

//     const handleShowRegisterModal = () => {
//         setShowRegisterModal(true);
//     };
//   return (
//     <div style={{ position: "relative" }}>
//       <div
//         style={{
//           position: "absolute",
//           top: "10px",
//           right: "100px",
//           zIndex: "1",
//           padding: '10px'
//         }}
//       >
//         <Button
//           className="btn border me-2"
//           variant=""
//           onClick={handleShowLoginModal}
//         >
//           Login
//         </Button>
//         <Button
//           className="btn bg-warning"
//           variant="primary"
//           onClick={handleShowRegisterModal}
//         >
//           Register
//         </Button>
//       </div>
//       <LoginComp
//         showModal={showLoginModal}
//         handleCloseModal={handleCloseLoginModal}
//       />
//       <RegisterComp
//         showModal={showRegisterModal}
//         handleCloseModal={handleCloseRegisterModal}
//       />
//     </div>
//   );
// }

// export default NavbarChild;
