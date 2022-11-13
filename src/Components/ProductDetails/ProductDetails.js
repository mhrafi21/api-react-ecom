import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'


export const ProductDetails = () => {
  
     useEffect(() => {
        let url = "https://fakestoreapi.com/products";
        fetch(url)
            .then(res => res.json())
            .then(data =>setProducts(data))
    },[]);
    


    
  let { key } = useParams();
  console.log(key);
    
  let [productss, setProducts] = useState([]);
 productss.map(p => p.id);
 




  

  // let d = totalData.find(pro => pro.id = key);
  
    

 



  return (
      <div className="container">
          <div className="row">
              
       
             
            
          </div>
    </div>
  )
}
