import Div from "../../assets/img/div.png"
import End from "../../assets/img/end.png"
import Logo_Blue from "../../assets/img/logo_blue.png"
import { GoArrowRight } from "react-icons/go";
import "./Aside.scss"

function Aside() {
    return (
        <>
            <div className="aside">
                <div className="aside_txt">
                    <div>
                        <strong>Featured</strong>
                    </div>
                    <br />
                    <div>
                        <img src={Logo_Blue} alt="" />
                    </div>
                    <br />
                    <div>
                        <h1>Deals made easy all year long.</h1>
                    </div>
                    <br />
                    <div>
                        <strong>Free shipping. Best prices.</strong>
                    </div>
                    <br />
                    <button>Get your thing <GoArrowRight className="icon" /></button>
                </div>
                <div>
                    <img src={Div} alt="" />
                </div>
                <div>
                    <img src={End} alt="" />
                </div>
            </div>
            <div className="products_txt">
                <h1>Today's Deals – All With Free Shipping</h1>
                <div className="txt_img">
                    <strong>See all</strong>
                    <GoArrowRight className="icon"/>
                </div>
            </div>
        </>
    )
}

export default Aside