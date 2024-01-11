import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";
import CategoryPage from "./page/category/CategoryPage";
import UserPage from "./page/user/UserPage";
import ProductPage from "./page/product/ProductPage";
import CustomerPage from "./page/customer/CustomerPage";
import Layout  from "./component/layout/Layout";

import LayoutDashboard from "./component/layout/LayoutDashboard";
import HomePageD from "./page-dashboard/home/HomePage";
import CategoryPageD from "./page-dashboard/category/CategoryPage";
import ProductPageD from "./page-dashboard/product/ProductPage";
import UserPageD from "./page-dashboard/user/UserPage";
import CustomerPageD from "./page-dashboard/customer/CustomerPage";
import './App.css'

const App = ()=>{
  //@TODO
  //check path has "dashboard"
  const is_dashboard = window.location.pathname.includes("dashboard");//return true and fail
  return(
  
    <BrowserRouter>
    {/* Rount Website And Backend */}
      <Routes >
        {/* Route Website */}
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/customer" element={<CustomerPage />}/> 
          <Route path="/user" element={<UserPage />}/>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />}/>
          <Route path="*" element={<h1>Page Not Found.</h1>}/>
        </Route>

        {/* Route Backend */}
        <Route path="/dashboard" element={<LayoutDashboard />}>
            <Route path="" element={<HomePageD />} />
            <Route path="customer" element={<CustomerPageD />} />
            <Route path="user" element={<UserPageD />} />
            <Route path="category" element={<CategoryPageD />} />
            <Route path="product" element={<ProductPageD />} />
        </Route>
      </Routes>
   



      {/* {!is_dashboard && <div>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/customer" element={<CustomerPage />}/> 
          <Route path="/user" element={<UserPage />}/>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />}/>
          <Route path="*" element={<h1>Page Not Found.</h1>}/>
        </Routes>
      </div>}

      {is_dashboard && 
        <div>
          <LayoutDashboard />
          
        <Routes>
          <Route path="dashboard">
            <Route path="" element={<HomePageD />} />
            <Route path="customer" element={<CustomerPageD />} />
            <Route path="user" element={<UserPageD />} />
            <Route path="category" element={<CategoryPageD />} />
            <Route path="product" element={<ProductPageD />} />
  
          </Route>
           
        </Routes>
        </div>
      } */}


     </BrowserRouter>

      


 
  )
}
export default App;