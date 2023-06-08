import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

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
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;