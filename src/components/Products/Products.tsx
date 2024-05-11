import { useEffect, useState } from "react"
import "./Products.scss"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";

function Products() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProducts(data.slice(0, 10)))
    })
    return (
        <>
            <div className="products_txt">
                <h1>Explore Popular Categories</h1>
            </div>
            <section className="products" id="products" role="selection">
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
                                    <Link className="link" to={"/clothes"}>
                                        <div className="products_id">
                                            <img src={products.category.image} alt="" />
                                            <h1>{products.category.name}</h1>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </section>
            <div className="products_txt">
                <h1>Score these trending kicks</h1>
                <div className="txt_img">
                    <strong>See all</strong>
                    <GoArrowRight className="icon"/>
                </div>
            </div>
        </>
    )
}

export default Products