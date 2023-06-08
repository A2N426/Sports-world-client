import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FcGoogle } from 'react-icons/fc';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const { googleLogin } = useContext(AuthContext)


    const onSubmit = data => {
        console.log(data)
    };

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
        <div className="mt-20 mb-20">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:w-2/6 w-3/4 mx-auto min-h-screen">
                    <div className="">
                        <div className="card shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Login" />
                                </div>
                                <p>Do not Have an account? Please <Link className="text-primary hover:underline" to="/register">Register</Link></p>
                                <div className="divider">OR</div>
                                <div
                                    onClick={handleGoogleSignIn}
                                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                                >
                                    <FcGoogle size={32} />

                                    <p>Continue with Google</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;