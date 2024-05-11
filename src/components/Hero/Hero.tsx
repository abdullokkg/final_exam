import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/logo"
import { IoIosSearch } from "react-icons/io";
import "./Hero.scss"

function Hero() {
    const navigate = useNavigate()
    const handle = () => {
        navigate("/search")
    }
    return (
        <>
            <section className="hero">
                <div className="hero_logo">
                    <Link to={"/"}><Logo /></Link>
                    <form className="hero_form">
                    <select className="form_select">
                        <option value="Shop">Shop by <br />category</option>
                    </select>
                </form>
                </div>
                <form onClick={handle}  className="hero_categories">
                    <li className="hero_item"><Link to={"/"}><IoIosSearch /></Link></li>
                    <input  className="categories_input" type="text" placeholder="Search for anything" />
                    <select className="hero_select">
                        <option value="All Categories">All Categories</option>
                    </select>
                </form>
                <div className="hero_search">
                    <button className="hero_btn">Search</button>
                    <ul className="hero_ul">
                        <li className="hero_ul_item">Advanced</li>
                    </ul>
                </div>
            </section>
        </>
    )
}


export default Hero