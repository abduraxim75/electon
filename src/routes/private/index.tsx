import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from '../../redux/store/store';
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import { useEffect } from "react";
import { Getprofile } from "../../redux/features/authslice";

const Private = () => {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.authRoot)
    

    useEffect(()=>{
        dispatch(Getprofile());
    },[])

    console.log(auth)

    return (
        <div>
            {
                auth.token ?
                    <div className="account">
                        <Sidebar />
                        <Outlet />
                    </div>
                    : <Navigate to="/login" />
            }

        </div>
    )
}

export default Private