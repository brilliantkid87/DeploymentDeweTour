import React from 'react'
import AddTrips from '../AddTrip'
import NavLogAfter from '../Navbar/NavlogAfter'
import FooterComponents from '../Footer'

function AddTripAdmins() {
  return (
    <div>
        <NavLogAfter />
        <AddTrips />
        <FooterComponents />
    </div>
  )
}

export default AddTripAdmins