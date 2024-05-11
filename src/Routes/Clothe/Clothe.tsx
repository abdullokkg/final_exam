import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Clothe_banner from "../../components/Clothe_banner/Clothe_banner";
import { AppDispatch } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likeProduct } from "../../redux/slice/likeSlice";
import { FaCartPlus } from "react-icons/fa";
import { cartproducts } from "../../redux/slice2/cartSlice";
import { ID } from "../../redux/slice3/ids";

function Clothe() {
    const [clothes, setClothes] = useState([])
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/smartphones")
            .then(response => response.json())
            .then(data => setClothes(data.products))
    })
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
            <Clothe_banner />
            <div className="clothes">
                {
                    clothes.map(clothe =>
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

export default Clothe