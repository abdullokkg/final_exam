import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Phones_banner from "../../components/Phones_banner3/Phones_banner";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { likeProduct } from "../../redux/slice/likeSlice";
import { FaCartPlus } from "react-icons/fa";
import { cartproducts } from "../../redux/slice2/cartSlice";
import { ID } from "../../redux/slice3/ids";

function Shirts() {
    const [smartphones, setSmartphones] = useState([]);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/mens-shirts")
            .then(response => response.json())
            .then(data => setSmartphones(data.products));
    }, []);
    console.log(smartphones);
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
    return (
        <>
            <Phones_banner/>
            <div className="clothes">
                {
                    smartphones.map(phone => 
                        <Card  className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup3(phone)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={phone.images[0]} 
                                    alt="Smartphone"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        ${phone.price} 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {phone.title} 
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={()=> handleup2(phone)} aria-label="add to favorites" >
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton onClick={() => handleup(phone)} aria-label="add to favorites">
                                <FaCartPlus />
                            </IconButton>
                        </Card> 
                    )
                }
            </div>
        </>
    );
}

export default Shirts;
