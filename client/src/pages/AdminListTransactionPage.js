import React from 'react'
import NavLogAdminAfter from '../components/Navbar/NavLogAdmin'
import FooterComponents from '../components/Footer'
import NavLogAfter from '../components/Navbar/NavlogAfter'
import ListTransactionAdmin from '../components/ListTransaction'

function AdminListTransactionPages() {
  return (
    <div>
        <NavLogAfter />
        <ListTransactionAdmin />
        <FooterComponents />
    </div>
  )
}

export default AdminListTransactionPages