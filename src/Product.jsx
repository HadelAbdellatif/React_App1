import React from 'react'

export default function Product(props) {
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 m-3">
                    <div class="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-warning">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                            <a href="#" className="btn btn-warning">Order Now</a>
                        </div>
                    </div>
                </div>
    </>
  )
}
