import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../../db/utils";
import { useDispatch, useSelector } from "react-redux";
import Cart_banner from "../../components/cart_banner/cart"
import { ID } from '../../redux/slice3/ids';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const reduxProducts = useSelector((state: RootState) => state.cartproduct.cart)
    useEffect(() => {
        const data = loadFromLocalStorage("likedProducts");
        if (data) {
            setCart(data);
        }
    }, [reduxProducts]);
    const handleup3 = (phone2) => {
        dispatch(ID(phone2))
        console.log(phone2);
        navigate("/id")
    }
    return (
        <>  
            <Cart_banner/>
            <div className="clothes">
                {reduxProducts.map(product => (
                    <Card key={product.id} className='cosmetic_card2' sx={{ maxWidth: 345 }}>
                        <div onClick={() => handleup3(product)}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.images[0]}
                                alt="Makeup"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    ${product.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.title}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Cart