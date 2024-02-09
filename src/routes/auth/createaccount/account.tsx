import auth from "../../../assets/auth.png"
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../redux/store/store";
import { CreateUser } from "../../../redux/features/authslice";


const CreateAccount = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleByGoogle = (userCredentials: string) => {
        const userBygogle = JSON.parse(window.atob(userCredentials.split(".")[1]));
        const user = {
            email: userBygogle.email, first_name: userBygogle.given_name,
            photo_url: userBygogle.picture
        };
        dispatch(CreateUser(user))
    }
    const handlebygoogle = (message: string) => {
        console.log(message)
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
                            Sign Up
                        </h1>
                        <GoogleLogin
                            onSuccess={(credentialResponse: any) => handleByGoogle
                                (credentialResponse.credential)}
                            onError={() => handlebygoogle("Something went wrong")}
                        />
                        <p className="link-paragraph">Already Have Account?
                            <Link to='/login'>Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}
export default CreateAccount