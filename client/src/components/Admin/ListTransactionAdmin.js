import React from 'react'
import ListTransactionAdmin from '../ListTransaction'
import NavLogAfter from '../Navbar/NavlogAfter'
import FooterComponents from '../Footer'

function ListTransactionAdmins() {
  return (
    <div>
        <NavLogAfter />
        <ListTransactionAdmin />
        <FooterComponents />
    </div>
  )
}

export default ListTransactionAdmins