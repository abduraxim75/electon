import { Button } from "../../utils/button"

const SaleUp = () => {
    return (
    <div className="saleup saleup-target">
        <section className="saleup-container">
            <div>
                    <Button btnsize='decto' className='btn' type='button' >New Laptop</Button>
            </div>
                    <h1 className="saleup-h1">
                    Sale up to 50% off
                    </h1>
                    <h3 className="saleup-h3">12 inch hd display</h3>
                <div className="shop-btn">
                <Button btnsize='decto2' className='btn' type='button' >Shop Now</Button>
                </div>
        </section>
        </div>
    )
}


export default SaleUp