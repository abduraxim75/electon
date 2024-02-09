import { Product } from "../../types"
import Producttr from "./tr"
import Usertr from "./usertr"
import { User } from '../../types/index';

const Table = ({ data, type } : { data: [], type: "user" | "product" }) => {
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            {type === "user" ? "Email" : "Variants"}
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            {type === "user" ? "Role" :"Category"}
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map((item: Product | User ,index) => {
                            if (type === "user") {
                                return <Usertr key={index} user={item as User } />
                            } else {
                                return <Producttr key={index} product=
                                    {item as Product} />
                            }
                        }
                        )
                    }
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
        </div>
    )
}

export default Table