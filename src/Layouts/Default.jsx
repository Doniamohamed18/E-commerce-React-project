import React from 'react'
import Navbar from "../Components/Navbar"
import { Outlet } from 'react-router'
import Footer from "../Components/Footer"

const Default = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-between p-0" style={{ minHeight: "100vh" }}>
        <div>
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Default
