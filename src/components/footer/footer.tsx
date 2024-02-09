import { Button } from "../../utils/button"
import headphone from "../../assets/headphone.png"
import logo from "../../assets/logo.png"
import { Facebook, Google, WhatsApp } from "../../utils/svg"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-info">
                <div>
                    <h2 className="footer-h2">
                        Subscribe newsletter
                    </h2>
                </div>
                <div>
                    <Button type="button" btnsize="large" className="btn">Email address</Button>
                </div>
                <div>
                    <img className="foot-img" src={headphone} />
                </div>
                <div>
                    <h4>
                        Call us 24/7 :
                        <br />
                        (+62) 0123 567 789
                    </h4>
                </div>
            </div>
            <div className="last-footer">
                <div className="ul-lists__offuter">

                    <div>
                        <img src={logo} />
                    </div>
                    <div className="all-ul-footer">
                        <p>
                            64 st james boulevard <br />
                            hoswick , ze2 7zj
                        </p>
                        <hr className="hr" />
                    </div>
                    <div>
                        <ul className="svg-formatter">
                            <li>
                                <a target="_blank" href="https://google.com">
                                <Google/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://facebook.com">
                                <Facebook />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://whatsapp.com">
                                <WhatsApp />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="defacto">
                    <div className="alpha">
                        <h3 className="alpha__h3">
                            Find product
                        </h3>
                        <ul className="find-product">
                            <li className="ul-data">
                                Brownze arnold
                            </li>
                            <li className="ul-data">
                                Chronograph blue
                            </li>
                            <li className="ul-data">
                                Smart phones
                            </li>
                            <li className="ul-data">
                                Automatic watch
                            </li>
                            <li className="ul-data">
                                Hair straighteners
                            </li>
                        </ul>
                    </div>
                    <div className="sector">
                        <h3 className="alpha__h3">
                            Get help
                        </h3>
                        <ul className="find-product">
                            <li className="ul-data">
                                About us
                            </li>
                            <li className="ul-data">
                                Contact us
                            </li>
                            <li className="ul-data">
                                Return policy
                            </li>
                            <li className="ul-data">
                                Privacy policy
                            </li>
                            <li className="ul-data">
                                Payment policy
                            </li>
                        </ul>
                    </div>
                    <div className="sector">
                        <h3 className="alpha__h3">
                        About us
                        </h3>
                        <ul className="find-product">
                            <li className="ul-data">
                            News
                            </li>
                            <li className="ul-data">
                            Service
                            </li>
                            <li className="ul-data">
                            Our policy
                            </li>
                            <li className="ul-data">
                            Custmer care
                            </li>
                            <li className="ul-data">
                            Faq’s
                            </li>
                        </ul>
                    </div>
                    .
                </div>
            </div>
        </div>
    )
}
export default Footer