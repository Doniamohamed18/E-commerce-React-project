import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({ product,children }) => {
    let navigate = useNavigate()
    return (
        <>
            <div className="col p-0">
                <div className="card" style={{width:"18rem"}}>
                    <img src={product.image} className="card-img-top object-fit-cover" alt="..." style={{height:"300px"}}/>
                    <div className="card-body">
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4 className="card-title">{product.name}</h4>
                            <h5 className="card-title">{product.price}</h5>
                        </div>
                        <p className="card-text">{product.body}</p>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card