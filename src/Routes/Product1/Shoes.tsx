import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Shoes_banner from "../../components/Shoes_banner/Shoes_banner";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { likeProduct } from "../../redux/slice/likeSlice";
import { FaCartPlus } from "react-icons/fa";
import { cartproducts } from "../../redux/slice2/cartSlice";
import { ID } from "../../redux/slice3/ids";

function Product1() {
    const [furniture, setFurniture] = useState([]);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()


    useEffect(() => {
        fetch("https://dummyjson.com/products/category/home-decoration")
            .then(response => response.json())
            .then(data => setFurniture(data.products));
    }, []);
    console.log(furniture);
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
            <Shoes_banner />
            <div className="clothes">
                {
                    furniture.map(furnitur =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup3(furnitur)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={furnitur.images[0]}
                                    alt="Smartphone"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        ${furnitur.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {furnitur.title}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={()=> handleup2(furnitur)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton onClick={() => handleup(furnitur)} aria-label="add to favorites">
                                <FaCartPlus />
                            </IconButton>
                        </Card>
                    )
                }
            </div>
        </>
    );
}

export default Product1;
