import { Link } from "react-router-dom"
import { FaRegBell } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { AiFillHeart } from "react-icons/ai";
import "./Nav.scss"

function Nav() {
    return (
        <>
            <nav className="nav">
                <ul className="nav_items">
                    <ul className="ul_items">
                        <li className="ul_item">Hi!</li>
                        <li className="ul_item_link"><Link to={"/login"}>login</Link></li>
                        <li className="ul_item">or</li>
                        <li className="ul_item_link"><Link to={"/sign_up"}>sign_up</Link></li>
                    </ul>
                    <li className="ul_item">Daily Deals</li>
                    <li className="ul_item">Brand Outlet</li>
                    <li className="ul_item">Help & Contact</li>
                </ul>
                <form className="nav_form">
                    <ul className="form_ul">
                        <li className="form_ul_item">Ship to</li>
                        <li className="form_ul_item">Sell</li>
                    </ul>
                    <select className="form_option">
                        <option value="watch_list">Watchlist</option>
                    </select>
                    <select className="form_option">
                        <option value="my_ebay">My eBay</option>
                    </select>
                    <ul className="form_items">
                        <li className="form_item"><Link className="form_item_link" to={"/"}><FaRegBell /></Link></li>
                        <li className="form_item"><Link className="form_item_link" to={"/cart"}><SlBasket /></Link></li>
                        <li className="form_item"><Link className="form_item_link" to={"/like"}><AiFillHeart /></Link></li>
                    </ul>
                </form>
            </nav>
        </>
    )
}

export default Nav