import Aside from "../../components/Aside/Aside"
import Carousel from "../../components/Carousel/Carousel"
import Index from "../../components/Index/Index"
import Products from "../../components/Products/Products"


function Home() {
  return (
    <>
        <Carousel/>
        <Products/>
        <Aside/>
        <Index/>
    </>
  )
}

export default Home