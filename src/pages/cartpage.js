
import Layout from '../components/layout';
import React, { Component, useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Productinfo from './productinfo';
import {FaTrash} from 'react-icons/fa'
import {addDoc, getDocs} from '../Fireconfig'
import {collection} from '../Fireconfig'
function Cartpage() {
    const {cartItems}=useSelector(state=>state.cartReducer)
    const dispatch=useDispatch();
    const [totalAmount,setTotalAmount]=useState(0);
    const deleteFromCart=(product)=>{
        dispatch({type:'DELETE_FROM_CART',payload:product});
    }
    useEffect(()=>{
        let temp=0;
        cartItems.forEach((cartItem)=>{
            temp=temp+cartItem.price
        })
        setTotalAmount(temp);
    },[cartItems])
    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
        },[cartItems])
    return (
        
        <Layout>
            <table className='table mt-2'>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item=>{
                    return <tr>
                        
                        <td><img src={item.imageURL} height="80" width="80" ></img></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><FaTrash onClick={()=>deleteFromCart(item)}></FaTrash></td>
                    </tr>
})}
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <h1 className="total-amount">total Amount = {totalAmount} RS</h1>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                <button>Place Order</button>
                </div>
            
        </Layout>
    );
}
export default Cartpage