import { useEffect, useState } from "react"
import "./Clothes_banner.scss"

function Shoes_banner() {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products/category/mens-shoes")
            .then(response => response.json())
            .then(data => setBanner(data.products.slice(0,1)))
    })
    return (
        <div className="banner">
            {
                banner.map(banners =>
                    <div className="banner_img">
                        <img src={banners.images[0]} alt="" />
                    </div>
                )
            }
        </div>
    )
}

export default Shoes_banner