import { AxiosResponse } from "axios";
import instance from "../../helpers/axios/axios";
import { User } from "../../types";
import { Button, Flex } from "antd";

const UserTr = ({ user }: { user: User }) => {
    const handlePromoteAdmin = async () => {
        try {
            const response: AxiosResponse = await instance.post("/admin/add-admin", {
                email: user.email,
            });
            console.log(response.data);
        } catch (error: any) {
            console.log(error);
        }
    };
    return (
        <tr>
            <td>{user.first_name}</td>
            <td>{user.email}</td>
            <td>
                <img
                    width={40}
                    height={40}
                    src={
                        user.photo_url
                            ? user.photo_url
                            : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    }
                    alt=""
                />
            </td>
            <td>{user.role}</td>
            <td>
                <div className="buttons">
                    <Flex gap="small" wrap="wrap">
                        <Button onClick={handlePromoteAdmin} type="primary">Promote</Button>
                        <Button type="primary" danger>
                            Delete
                        </Button>
                    </Flex>
                </div>
            </td>
        </tr>
    );
};

export default UserTr;

