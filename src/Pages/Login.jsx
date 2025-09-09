import React, { useState } from 'react'
import * as z from "zod"
import axios from "axios"
import { useNavigate } from "react-router"
import { toast } from 'react-toastify';
import './Login.css'

let userSchema = z.object({
  username: z.string().min(3, "Value must be 3 or more characters").max(10, "value must be under 10 characters"),
  password: z.string().min(6, "value must be 6 characters")
})

const Login = () => {
  let [user, setUser] = useState({ username: "", password: "" })
  let [errors, setErrors] = useState({})
  let navigate = useNavigate()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = userSchema.safeParse(user)
    if (!result.success) {
      let newErrors = {}
      result.error.issues.forEach(err => newErrors[err.path[0]] = err.message)
      setErrors(() => newErrors)
      return;
    }
    setErrors({})
    try {
      let response = await axios.post('https://dummyjson.com/auth/login', user, { credentials: 'include' })
      localStorage.setItem("token", response.data.accessToken)
      setUser({ username: "", password: "" })
      toast.success("Login success")
      setTimeout(() => {
        navigate("/")
      }, 2000)
    } catch (err) {
      toast.error("Login Failed")
    }
  }

  return (
    <div className="login-container">
      <div className="login-card shadow p-4">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-semibold login-label">
              User Name :
            </label>
            <input
              type="text"
              className="form-control login-input"
              id="exampleInputEmail1"
              value={user.username}
              onChange={handleChange}
              name="username"
              placeholder="Enter your name"
            />
            {errors && errors.username && <p><small className="text-danger">{errors.username}</small></p>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold login-label">
              Password :
            </label>
            <input
              type="password"
              className="form-control login-input"
              id="exampleInputPassword1"
              value={user.password}
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
            />
            {errors && errors.password && <p><small className="text-danger">{errors.password}</small></p>}
          </div>
          <button type="submit" className="btn login-btn w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3 text-muted login-footer">
          Don’t have an account? <a href="#" className="text-decoration-none login-link">Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default Login
