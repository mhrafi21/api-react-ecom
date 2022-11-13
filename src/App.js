import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Components/Shop/Shop";
import Carts from "./Components/Carts/Carts";
import { ProductDetails } from './Components/ProductDetails/ProductDetails';


function App() {


  return (
      <BrowserRouter>
    <Navbar></Navbar>
    
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path = "/carts" element = {<Carts></Carts>} />
        <Route path = "/product/:key" element = {<ProductDetails></ProductDetails>} />
          
      </Routes>
    
        </BrowserRouter>
    
    
     
    
   
  )
}

export default App;
