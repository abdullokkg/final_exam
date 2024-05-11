import { Route, Routes } from "react-router-dom"
import Home from "./Routes/Home/Home"
import Clothes from "./Routes/Clothes/Clothes"
import Clothe from "./Routes/Clothe/Clothe"
import SmartPhones from "./Routes/SmartPhones/SmartPhones"
import Furniture from "./Routes/Furniture/Furniture"
import Shoes from "./Routes/Shoes/Shoes"
import Product1 from "./Routes/Product1/Shoes"
import Furnitur from "./Routes/Furnitur/Furniture"
import Shoe from "./Routes/Shoe/Shoes"
import Product2 from "./Routes/Product2/Shoes"
import Electronic from "./Routes/Electronics/SmartPhones"
import Like from "./Routes/Like/Like"
import Cart from "./Routes/Cart/Cart"
import Id from "./components/id/id"
import Search from "./components/Search/Search"
import Shirts from "./Routes/Shirts/Shirt"
import Mens_shoes from "./Routes/Mens_shoes/Mens_shoes"
import Mens_watches from "./Routes/Mens_watches/Mens_watches"
import Womens_watches from "./Routes/Womens_watches/Womens_watches"
import Womens_bags from "./Routes/Womens_bags/Womens_bags"
import Womens_jewellery from "./Routes/Womens_jewellery/Womens_jewellery"
import Sunglasses from "./Routes/Sunglasses/Sunglasses"
import Automotive from "./Routes/Automotive/Automotive"
import Motorcycle from "./Routes/Motorcycle/Motorcycle"
import Lighting from "./Routes/Lighting/Lighting"
import Login from "./Routes/auth/Login/Login"
import Sign_up from "./Routes/auth/Sign_up/Sign-up"

function RouteController() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/clothe" element={<Clothe />} />
        <Route path="/smartphones" element={<SmartPhones />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shoe" element={<Shoe />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/furnitur" element={<Furnitur />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/like" element={<Like />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="id" element={<Id/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="shirts" element={<Shirts/>}/>
        <Route path="mens_shoes" element={<Mens_shoes/>}/>
        <Route path="mens_watches" element={<Mens_watches/>}/>
        <Route path="womens_watches" element={<Womens_watches/>}/>
        <Route path="womens_bags" element={<Womens_bags/>}/>
        <Route path="womens_jewellery" element={<Womens_jewellery/>}/>
        <Route path="sunglasses" element={<Sunglasses/>}/>
        <Route path="automotive" element={<Automotive/>}/>
        <Route path="motorcycle" element={<Motorcycle/>}/>
        <Route path="lighting" element={<Lighting/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign_up" element={<Sign_up/>}/>
      </Routes>
    </>
  )
}

export default RouteController