import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'


const Model = () => {

    const [product, setProduct] = useState({
        id: new Date().toISOString(),
        name: "",
        price: 0,
        body: "",
        image: "",
        category: ""
    })
    let {id} = useParams()
    useEffect(() => {
        const getData = async () => {
            let {data} = await axios.get("http://localhost:3000/products/" + id)
            setProduct(data)
        }
        getData()
    },[])
    let navigate = useNavigate()

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let { data } = await axios.post("http://localhost:3000/products", product)
        setProduct(data)
        toast.success("✅ Product added successfully!")
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }

    return (
        <>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
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
                        <div className="modal-footer">
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Edit Product</button>
                            </div>
                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Model
