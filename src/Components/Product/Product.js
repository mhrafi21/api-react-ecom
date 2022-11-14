import React from 'react';

import { Link } from 'react-router-dom';
import './Product.css';

export default function Product(props) {

console.log(props.name)


  return (
    <div className = "main">
    <div className="container">
        <h1 className='py-4'>Shop</h1>

      <div className="row">
          {props.name.map(product =>
            
            <div className="col-6 col-md-3 col-lg-2 text-decoration-none p-0 p-2 h-100 ">
              <Link  to={`/product/${product.id}`} style={{textDecoration:'none'}}>
            <div className="card h-col">
         <img className="img-fluid" style = {{height:'10rem', width:'100%'}} src={product.image} alt = 'd'></img>
             <div class="card-body">
              <h5 className="card-title fs-6"> <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>{product.title.slice(0,25) }</Link>  ...</h5>
              <p className="card-text text-danger fs-5">${ product.price }</p>
                <p className="card-text">
                  <small className='d-flex align-items-center' style={{ color: 'orange' }}>
                    <div className = "d-flex">
                       <i class="fa-solid fa-star">
                    </i><i class="fa-solid fa-star">
                    </i><i class="fa-solid fa-star">
                    </i><i class="fa-solid fa-star">
                    </i><i class="fa-solid fa-star">
                    </i>
                   </div>
                    <span class="text-muted">({product.rating.count}) </span></small>
                    </p>
                    
                <button onClick = {()=>{props.CartHandler(props.CartHandler)}} className = 'btn btn-primary w-100'>Add to cart</button>
    
                </div>
                </div>
           </Link>
                
              </div>  
           
        
         )}

         </div> 
   
    
   
      </div>    
      </div>

  )
}
 