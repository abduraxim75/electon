import { useEffect, useState } from "react";
import Modal from "../../../components/modal/modal";
import { Button } from "../../../utils/button";
import Table from "../../../components/table/table";
import { AxiosResponse } from "axios";
import instance from "../../../helpers/axios/axios";
import { FiImage, FiX } from "react-icons/fi";
import { ProductVariant } from "../../../types";


const ManageProduct = () => {
    const [products, setProducts] = useState<[]>([]);
    const [variant, setVariants] = useState<ProductVariant[]>([])

    const [isModalOpen, setisModalOpen] = useState(false);
    useEffect(() => {
        const fetchproduct = async () => {
            try {
                const response: AxiosResponse = await instance("/product/all");
                setProducts(response.data.payload.products)
            } catch (error: any) {
                console.log(error);

            }
        }
        fetchproduct();
    }, [])

    const AddVariants = () => {

    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <h3>
                    Manage Product
                </h3>
                <Button onClick={() => setisModalOpen(true)} btnsize="large" className="btn">Add Product</Button>
            </div>
            <div className="dash-data">
                <Table type="product" data={products} />
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setisModalOpen} >
                <form className="product-form">
                    <h3>
                        Create New Product
                    </h3>
                    <FiX onClick={() => setisModalOpen(false)} />
                    <input type="text" placeholder="Product Name" />
                    <input type="text" placeholder="Product Type" />
                    <input type="text" placeholder="Product Category" />
                    <textarea placeholder="Product Description" cols={30} rows={20}></textarea>
                    <div>
                        <label htmlFor="">Featured<input type="checkbox" /></label>
                        <label htmlFor="">Visible In Store<input type="checkbox" /></label>
                    </div>
                    <div className="product-form__variant">
                        <h4>
                            Variants
                        </h4>
                        <Button btnsize="large" className="btn">Add Variants</Button>
                    </div>
                    <div>
                    </div>
                    <div className="product-form__image">
                        <div className="img-input__wrapper">
                            <FiImage />
                            <p>
                                Add New Image
                            </p>
                            <input type="file" />
                        </div>
                    </div>
                    <Button className="btn" btnsize="large">Create New Product</Button>
                </form>
            </Modal>
        </div>
    )

}


export default ManageProduct; 