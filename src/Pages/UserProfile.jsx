import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router"
import pic from "./image/pic3.jpg"
import './UserProfile.css'  // Import the CSS file

const UserProfile = () => {
  let [user, setUser] = useState({})
  useEffect(() => {
    async function getData() {
      let { data } = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      setUser(data)
    }
    getData()
  }, [])

  return (
    <div className="profile-container">
      <div className="profile-card shadow-lg rounded-4">
        <img
          src={pic}
          alt="User"
          className="profile-image rounded-top-4"
        />
        <div className="profile-body text-center">
          <h4 className="profile-title mb-3">User Details</h4>
          <div className="profile-info text-start">
            <p className="profile-item">
              <span className="profile-label">👤 User Name:</span> {user.firstName}
            </p>
            <hr />
            <p className="profile-item">
              <span className="profile-label">📧 Email:</span> {user.email}
            </p>
            <hr />
          </div>
          <Link to="/" className="profile-btn mt-3">
            ⬅ Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
