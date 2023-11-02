import './App.css'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Product from './Pages/Product/Product'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout';
import Cancel from './Pages/Cancel/Cancel';
import Success from './Pages/Success/Success';

const Layout=()=>{
  return (
     <div className="bg-[#Fefefe] text-gray-800 dark:bg-[#1E1E1E] dark:text-white h-full">
        <Navbar/>
        <div className="min-h-[calc(100vh-200px)] ">
            <Outlet/>
        </div>
        <Footer/>
      </div>
  )
}

const LoginLayout =()=>{
  return (
    <div>
      <Navbar/>
      <Login/>
    </div>
  )
}

const RegisterLayout=()=>{
  return (
    <div>
      <Navbar/>
      <Register/>
    </div>
  )
}

const SuccessLayout=()=>{
  return (
    <div>
      <Navbar/>
      <Success/>
    </div>
  )
}

const CancelLayout=()=>{
  return (
    <div>
      <Navbar/>
      <Cancel/>
    </div>
  )
}

const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products',
        element:<Products/>,
      },
      {
        path:'/product/:id',
        element:<Product/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/checkout',
        element:<Checkout/>
      }
    ],
},
{
  path:'/login',
  element:<LoginLayout/>,

},
{
  path:'/register',
  element:<RegisterLayout/>,

},
{
  path:'/success',
  element:<SuccessLayout/>
},
{
  path:'/cancel',
  element:<CancelLayout/>
}
])

function App() {
   
  return (
    <RouterProvider router={router}/>
  )
}

export default App
