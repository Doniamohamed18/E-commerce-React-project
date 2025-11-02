import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Model from '../Components/Model';
import DeleteModel from '../Components/DeleteModel';
import { toast } from 'react-toastify';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error(err);
        toast.error("Error fetching product");
      }
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    toast.success("Product Deleted Successfully");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className='my-5 text-center'>Product Details</h1>

      {!product ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="product-details text-center mx-auto" style={{ maxWidth: "600px" }}>
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
          <h2 className="mt-3">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="">${product.price}</h4>

          <div className="d-flex justify-content-center mt-4 gap-3">
            <button onClick={() => navigate(`/`)} className="btn btn-custom px-4">Back</button>
            {/* <button className="outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button> */}
            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">Delete</button>
          </div>
        </div>
      )}

      <Model />
      <DeleteModel handleDelete={handleDelete} />
    </div>
  );
};

export default ProductDetails;
