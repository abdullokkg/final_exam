import { Link } from "react-router-dom"
import "./Header.scss"

function Header() {
  return (
    <>
        <div className="header">
            <ul className="header_ul">
                <li className="header_ul_item"><Link className="link" to={"/"}>Home</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/smartphones"}>womens-shoes</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/clothe"}>smartphones</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/furniture"}>groceries</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/shoes"}>womens-dresses</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/product1"}>home-decoration</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/clothes"}>laptops</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/furnitur"}>skincare</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/shoe"}>tops</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/product2"}>furniture</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/electronic"}>fragrances</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/shirts"}>mens-shirts</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/mens_shoes"}>mens-shoes</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/mens_watches"}>mens-watches</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/womens_watches"}>womens-watches</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/womens_bags"}>womens-bags</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/womens_jewellery"}>womens-jewellery</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/sunglasses"}>sunglasses</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/automotive"}>automotive</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/motorcycle"}>motorcycle</Link></li>
                <li className="header_ul_item"><Link className="link" to={"/lighting"}>lighting</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Header