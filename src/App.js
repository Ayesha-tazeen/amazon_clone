import React from 'react';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer"
import Home from './pages/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Signin from "./pages/SignIn";
import Registration from "./pages/Registration";
import Checkout from "./pages/CheckOut";
import { productsData } from './api/Api';
import Cart from './pages/Cart';







function App() {
  const Layout = () => {
    return (
      <div><Header />
        <Outlet />
        <Footer /></div>
    )
  }
  const router = createBrowserRouter(createRoutesFromElements(

    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Route>
  ))
  return (
    <div className='font-bodyFont bg-gray-100' >
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
