import auth from "../../../assets/auth.png"
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store/store";
import { loginuser } from "../../../redux/features/authslice";


const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleByGoogle = (userCredentials:string)=>{
        const userBygogle = JSON.parse(window.atob(userCredentials.split(".")[1]));
        const user = {email:userBygogle.email,first_name:userBygogle.given_name,photo_url:userBygogle.picture};
        dispatch(loginuser(user))
    }

    const handlebygoogle = (message:string)=>{
        console.log(message )
    }
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <div >
            <div className="auth-login-container">
                <div>
                    <img src={auth} alt="auth" />
                </div>
                <form>
                    <h1 className="auth-form-title">
                        Sign In
                    </h1>
                    <GoogleLogin
                        onSuccess={(credentialResponse:any) => handleByGoogle(credentialResponse.credential)}
                        onError={() => handlebygoogle("Something went wrong")}
                    />
                    
                </form>
            </div>
        </div>
        </GoogleOAuthProvider>
    )
}
export default Login