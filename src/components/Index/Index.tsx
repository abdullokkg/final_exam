import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Index.scss"
import { useEffect, useState } from "react";

function Index() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProducts(data.slice(0, 10)))
    })
    return (
        <section className="products2" id="products" role="selection">
            <div className="products__wrapper1">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={42}
                    pagination={{
                        clickable: true,
                    }}

                    breakpoints={{
                        375: {
                            slidesPerView: 1.5,
                        },
                        500: {
                            slidesPerView: 2.5
                        },
                        700: {
                            slidesPerView: 3.5
                        },
                        900: {
                            slidesPerView: 4.5
                        },
                        1000: {
                            slidesPerView: 5.5
                        },
                        1200: {
                            slidesPerView: 6.5
                        },
                        1300: {
                            slidesPerView: 7.5
                        },
                        1400: {
                            slidesPerView: 8
                        }
                    }}
                    modules={[Pagination]}
                    className="products__list"
                >
                    <br />
                    <br />
                    {
                        Products.map(products =>
                            <SwiperSlide className="slide">
                                <Link className="link" to={"/clothe"}>
                                    <div className="products_id2">
                                        <img src={products.images[0]} alt="" />
                                        <h1>{products.title}</h1>
                                        <h1>${products.price}</h1>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Index