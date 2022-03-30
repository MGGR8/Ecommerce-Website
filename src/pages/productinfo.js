import React , {useState , useEffect} from 'react';
import Layout from '../components/layout';
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../Fireconfig";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


function Productinfo() {
    const [product, setProduct] = useState();
    const [loading, setLoading]=useState([]);
    const dispatch=useDispatch();
    const params = useParams();
    useEffect(() => {
      getdata();
    },[])
    async function getdata() {
        try {
          setLoading(true);
          const productTemp = await getDoc(doc(fireDB, "products", params.productid ));
         
    
        setProduct(productTemp.data());
        
        setLoading(false);
        }
         catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
      const addToCart=(product)=>{
        dispatch({type:"ADD_TO_CART",payload:product})
      }
    return (
        <Layout loading = {loading}>
            <div className="container">
            {product && (<div>
                 <p><b>{product.name}</b></p>
                 <img src ={product.imageURL} className = "product-info-img" />
                 <hr />
                 <p>{product.description}</p>
                 <div className='d-flex justify-content-end m-2'>
                 <button className="mx-2" onClick={()=>addToCart(product)}>ADD TO CART</button>
                 </div>
                
                </div>) }
            </div>
        </Layout>
    );
}
export default Productinfo