import React from 'react'

const DeleteModel = ({ handleDelete }) => {
  return (
    <>
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Delete product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h4 className="text-center text-danger my-3">Are your sure to delete this product ?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleDelete} className="btn btn-danger" data-bs-dismiss="modal">Delete Product</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteModel