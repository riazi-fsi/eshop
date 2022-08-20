import React from 'react'
import './Product.css'
function Product() {
  return (
   <div className="product">
    <div className="product__info">
        <p>title</p>
        <p className="product__price">
            <small>$</small>
            <strong>30</strong>
        </p>
        <div className="product__rating">*****</div>
    </div>
    

    <img src='' alt='product_1'></img>
    <button>add to basket</button>
   </div>
  )
}

export default Product