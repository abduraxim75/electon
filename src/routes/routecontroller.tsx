import { Route, Routes } from "react-router-dom"
import Home from "./home/home"
import Login from './auth/login/login';
import CreateAccount from './auth/createaccount/account';
import Card from './card/card';
import Private from "./private";
import ManageAdmins from "./dashboard/manage-admins/manageadmins";
import Dashboard from "./dashboard/dashboard";
import ManageProduct from "./dashboard/manage-product/manage-product";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import NotFound from "./error404/notfound";
import Profile from "./profile/profile";
const Routecontroller = () => {
    const auth = useSelector((state: RootState) => state.authRoot);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createnew" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/card" element={<Card />} />
            {
                auth.user?.role === "admin" &&
                <Route path="/dashboard" element={<Private />}>
                    <Route index element={<Dashboard />} />
                    <Route path="manage-admins" element={<ManageAdmins />} />
                    <Route path="manage-products" element={<ManageProduct />} />
                </Route>
            }
            {
                auth.user?.role === "user" &&
                <Route path="/profile" element={<Private />}>
                    <Route index element={<Profile />} />
                </Route>
            }
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routecontroller