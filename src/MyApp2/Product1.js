import { useEffect, useState } from 'react';
import { react } from 'react';
export default function Product1(){
  const [products,setProduct] = useState("")
  useEffect(()=>{
    getProducts()
  },[products])
  const getProducts = () =>{
    fetch("https://fakestoreapi.com/products")
      .then((result)=>result.json())
      .then((data)=>{
        console.log(data)
        setProduct(data)
      })
                
  }
    return(
        <>
 <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our <span>products</span>
        </h2>
      </div>
      <div className="row">
        {
        products && products.map((item)=>

       
        <div className="col-sm-6 col-md-4 col-lg-4">
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
              <img src={item.image}  alt="#" />
            </div>
            <div className="detail-box">
              <h5>
               {item.title}
              </h5>
              
              <h6>
               {item.price}
              </h6>
            </div>
          </div>
        </div>
       )}
      
       
      </div>
      <div className="btn-box">
        <a href>
          View All products
        </a>
      </div>
    </div>
  </section>
 
        </>
    )
}