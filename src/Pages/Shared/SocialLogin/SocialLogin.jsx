import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                // // save user to db
                // saveUser(result.user)
                // navigate(from, { replace: true })
            })
            .catch(err => {
                // setLoading(false)
                console.log(err.message)
                // toast.error(err.message)
            })
    }
    return (
        <div
            onClick={handleGoogleSignIn}
            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
        </div>
    );
};

export default SocialLogin;