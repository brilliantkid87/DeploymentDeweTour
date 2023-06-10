import React from "react";
import cardData2 from "../../dummy/FakeCardsTour";
import NavLogAfter from "../Navbar/NavlogAfter";
import IncomeTrips from "../IncomeTrip";
import FooterComponents from "../Footer";

function IncomeTripsAdmin() {
  return (
    <div>

        <NavLogAfter />
        <IncomeTrips />
        <FooterComponents />
    </div>
  );
}

export default IncomeTripsAdmin;
