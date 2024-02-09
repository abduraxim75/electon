import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";


const Sidebar = () => {
    const auth = useSelector((state: RootState) => state.authRoot);
    return (
        <div className="sidebar">
            <img className="dashlogo" src={logo} alt="logo" />
            <ul>
                {auth.user?.role === "admin" ?
                    <>
                        <li>
                            <NavLink end className={({isActive})=> isActive ? "sidebar-link  sidebar--link--active" : "sidebar-link" } to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? "sidebar-link  sidebar--link--active" : "sidebar-link" } to="/dashboard/manage-products">Manage Products</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? "sidebar-link  sidebar--link--active" : "sidebar-link" } to="/dashboard/manage-admins">Manage Admins</NavLink>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Sidebar;