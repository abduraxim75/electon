import Carousel from "../../components/carousel/carousel"
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/navbar"
import Phone from "../../components/phone-number"
import HomeProducts from "../../components/products/products"
import SaleUp from "../../components/saleup/saleup"
import Section from "../../components/section/section"
const Home = ()=>{
    return(
        <div>
            <Phone/>
            <Navbar />
            <Carousel/>
            <HomeProducts/>
            <SaleUp/>
            <Section/>
            <Footer/>
            
        </div>
    )
}
export default Home