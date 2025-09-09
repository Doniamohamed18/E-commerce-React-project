import { BrowserRouter, Route, Routes } from "react-router"
import Default from "./Layouts/Default"
import Home from "./Pages/Home"
import ProductDetails from "./Pages/ProductDetails"
import UserProfile from "./Pages/UserProfile"
import Add from "./Pages/Add";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
 import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/products/new" element={<Add />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/Profile" element={<UserProfile />} />
        </Route>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
