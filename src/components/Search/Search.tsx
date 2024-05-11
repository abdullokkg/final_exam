import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { FaCartPlus } from "react-icons/fa";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../assets/logo"
import { ID } from "../../redux/slice3/ids";
import { cartproducts } from "../../redux/slice2/cartSlice";
import { likeProduct } from "../../redux/slice/likeSlice";
import { AppDispatch } from "../../redux/store/store";
import { useDispatch } from "react-redux";

function Search() {
    const [product, setProduct] = useState([])
    const [value, setValue] = useState("")
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    console.log(typeof product);
    const handleup2 = (phone2) => {
        dispatch(likeProduct(phone2))
        console.log(phone2);
        navigate("/like")
    }
    const handleup = (phone2) => {
        dispatch(cartproducts(phone2))
        console.log(phone2);
        navigate("/cart")
    }
    const handleup3 = (phone2) => {
        dispatch(ID(phone2))
        console.log(phone2);
        navigate("/id")
    }

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${value}`)
            .then(response => response.json())
            .then(data => setProduct(data.products))
    })
    console.log(product);
    return (
        <><section className="hero">
            <div className="hero_logo">
                <Link to={"/"}><Logo /></Link>
                <form className="hero_form">
                    <select className="form_select">
                        <option value="Shop">Shop by <br />category</option>
                    </select>
                </form>
            </div>
            <form className="hero_categories">
                <li className="hero_item"><Link to={"/"}><IoIosSearch /></Link></li>
                <input onChange={(e) => setValue(e.target.value)} className="categories_input" type="text" placeholder="Search for anything" />
                <select className="hero_select">
                    <option value="All Categories">All Categories</option>
                </select>
            </form>
            <div className="hero_search">
                <button className="hero_btn">Search</button>
                <ul className="hero_ul">
                    <li className="hero_ul_item"><Link className="link" to={"/"}>Home</Link></li>
                </ul>
            </div>
        </section>
            <div className="clothes">
                {
                    product.map(clothe =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup3(clothe)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={clothe.images[0]}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {clothe.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ${clothe.price}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(clothe)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton onClick={() => handleup(clothe)} aria-label="add to favorites">
                                <FaCartPlus />
                            </IconButton>
                        </Card>
                    )
                }
            </div>
        </>
    )
}

export default Search