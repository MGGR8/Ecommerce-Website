import './App.css';
import logo from './logo.svg';

import Cartpage from './pages/cartpage';
import Homepage from './pages/homepage';
import Productinfo from './pages/productinfo';
import Registerpage from './pages/registerpage';
import Loginpage from './pages/loginpage';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import './stylesheets/layout.css';
import './stylesheets/products.css';
import './stylesheets/authentication.css';
import { ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ReactFnc(props) {
  return <div><h1>{props.children}</h1></div>;
}

function ReactCmp(props) {
  return <div>
    <ReactFnc>HIIIII</ReactFnc>
  </div>;
}

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
    
            <Route path='/home' exact element={<ProtectedRoutes><Homepage /></ProtectedRoutes>} /> 
            <Route path='/login' exact element={<Loginpage />} />
             <Route path='/cart' exact element={<ProtectedRoutes><Cartpage /></ProtectedRoutes>} /> 
             <Route path='/product/:productid' exact element={<ProtectedRoutes><Productinfo /></ProtectedRoutes>} />
             <Route path='/register' exact element={<Registerpage />} />
            </Routes>
            </BrowserRouter>
   </div>
  );
}

export default App;
export const ProtectedRoutes=({children})=>{
  if(localStorage.getItem("currentUser")){
    return children;
  }else{
    return <Navigate to="/login"/>
  }
  }
