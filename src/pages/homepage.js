import React, { useEffect,useState } from "react";
import Layout from "../components/layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../Fireconfig";
import { Fireproducts } from "../fireprodcuts.js";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
function Homepage() {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch();
  const {cartItems}=useSelector(state=>state.cartReducer)
  const [loading, setLoading]=useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getdata();},[])
async function getdata() {
    try {
      setLoading(true);
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = []
      users.forEach((doc) => {
     
        const obj = {
          id:doc.id,
          ...doc.data()
        }
        productsArray.push(obj)
        setLoading(false);
       
      }); 
      console.log(productsArray)
    setProducts(productsArray);
    }
     catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  const addToCart=(product)=>{
    dispatch({type:"ADD_TO_CART",payload:product})
  }
  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    },[cartItems])
  return (
    <Layout loading={loading}>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return <div className="col-md-4">
              <div className="m-2 p-1 product position-relative">
               <div className="product-content">
                
               <p>{product.name}</p>
               <div className="text-center">
                <img src = {product.imageURL} alt="" className='product-img'/>
                  </div>
                  </div>
                <div className='product-actions'>
                  <h2>{product.price} RS/-</h2>
                  <div className="d-flex">
                    <button className="mx-2" onClick={()=>addToCart(product)}>ADD TO CART</button>
                    <button onClick={()=>{
                      navigate(`/product/${product.id}`)
                    }}>VIEW</button>
                    </div>
                  </div>
            </div>
            </div>
          })}
        </div>
        </div>
    </Layout>
  );
}
export default Homepage;
