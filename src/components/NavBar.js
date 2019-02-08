import React from 'react'
import logo from '../logo.svg'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavBar = () => {
  return (
    <header>
      <Navbar color="danger">
        <NavbarBrand className="text-white"><img src={logo} height="48" className="d-inline-block align-center" alt="logo" /> Doctor Appointments</NavbarBrand>
      </Navbar>
    </header>
  )
}

export default NavBar
