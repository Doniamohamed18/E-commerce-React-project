import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Add = () => {
  const [product, setProduct] = useState({
    id: new Date().toISOString(),
    name: "",
    price: 0,
    body: "",
    image: "",
    category: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3000/products", product)
      toast.success("✅ Product added successfully!")
      setTimeout(() => {
        navigate("/")
      }, 2000)
    } catch (error) {
      toast.error("❌ Failed to add product!")
      console.error(error)
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "600px", backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2 className='text-center mb-4' style={{ color: '#007bff' }}>🛒 Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInput1" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInput1"
            value={product.name}
            onChange={handleChange}
            name="name"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInput2" className="form-label">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="exampleInput2"
            value={product.price}
            onChange={handleChange}
            name="price"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInput3" className="form-label">Product Details</label>
          <textarea
            className="form-control"
            id="exampleInput3"
            value={product.body}
            onChange={handleChange}
            name="body"
            placeholder="Enter product description"
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInput4" className="form-label">Product Image URL</label>
          <input
            type="text"
            className="form-control"
            id="exampleInput4"
            value={product.image}
            onChange={handleChange}
            name="image"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInput5" className="form-label">Product Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleInput5"
            value={product.category}
            onChange={handleChange}
            name="category"
            placeholder="e.g. electronics, clothing"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Product</button>
      </form>
    </div>
  )
}

export default Add
