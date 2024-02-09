import box from "../../assets/box.png";
import security from "../../assets/security.png";
import crown from "../../assets/crown.png"





const Section = () => {
    return (
        <div className="gold-container">
            <div className="al">
                <img src={box} />
                <div>
                    <h2>
                        Free delivery
                    </h2>
                    <p>on order above $50,00</p>
                </div>
                <img src={crown} />
                <div>
                    <h2>Best quality </h2>
                    <p>best quality in low price</p>
                </div>
                <img src={security} />
                <div>
                    <h2>
                        1 year warranty
                    </h2>
                    <p>
                        Avaliable warranty
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section