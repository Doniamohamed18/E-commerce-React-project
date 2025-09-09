import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Card from '../Components/Card'
import Model from '../Components/Model'

const ProductDetails = () => {
  let { id } = useParams()
  let [product, setProduct] = useState({})
  let navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get("http://localhost:3000/products/" + id)
      setProduct(() => data)
    }
    getData()
  }, [id])
  return (
    <>
      <div className="container">
        <h1 className='my-5 text-center'> product Details</h1>
        <div className='mx-auto' style={{ width: "fit-content" }}>
          {product && <Card product={product}>
            <button onClick={() => navigate(`/`)} className="btn btn-primary px-4 my-3 d-block mx-auto">Back To Products</button>
            <div className='d-flex justify-content-center g-3'>
              <button className='btn btn-warning px-3 me-3' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
              <button className='btn btn-danger px-3'>Delete</button>
            </div>
          </Card>}
        </div>
          <Model/>
      </div>
    </>
  )
}

export default ProductDetails