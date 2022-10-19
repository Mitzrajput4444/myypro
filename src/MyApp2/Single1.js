import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'

export default function Single1() {
    const { id } = useParams()
    const [products,setProduct] = useState("")
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((result)=>result.json)
        .then((data)=>{
            console.log(data)
            setProduct(data)
        })
    },[products])
  return (
    <section className="product_section layout_padding">
    <div className="container">
      <div className="row"> 
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Men's Shirt
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src={products.image}  alt="#" />
            </div>
            <div className="detail-box">
              <h5>
               {products.title}
              </h5>
              
              <h6>
               {products.price}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="detail-box">
              <h5>
               {products.title}
              </h5>
              
              <h6>
               {products.price}
              </h6>
            </div>
          </div>
        </div>
    
      
       
      </div>
     
     
    </div>
  </section>
 

  )
}
