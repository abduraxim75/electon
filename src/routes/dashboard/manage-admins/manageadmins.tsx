import { useEffect, useState } from "react";
import Table from "../../../components/table/table"
import instance from "../../../helpers/axios/axios";
import { AxiosResponse } from "axios";
import Modal from "../../../components/modal/modal";
const ManageAdmins = () => {
    const [users, setUsers] = useState<[]>([])
    const [isModalOpen,setisModalOpen] = useState(false);
        ([]);
    useEffect(() => {
        const fetchuser = async () => {
            try {
                const response: AxiosResponse = await
                    instance("/admin/registered-users");
                setUsers(response.data.payload)
            } catch (error: any) {
                console.log(error);

            }
        }
        fetchuser();
    }, [])
    return (
        <div className="dashboard-container">
            <div>
                <h3>
                    Manage Admins
                </h3>
                <div  className="admin-data">
                    <Table  type="user" data={users} />
                </div>
                <div>
                    <Modal isModalOpen = {isModalOpen} setIsModalOpen={setisModalOpen}>
                        <div>
                            
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}


export default ManageAdmins