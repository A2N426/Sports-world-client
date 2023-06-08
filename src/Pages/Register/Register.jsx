import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const image_hosting_token = import.meta.env.VITE_image_hosting_token;
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const image_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const onSubmit = data => {
        setError("")

        const formData = new FormData();
        formData.append("image", data.image[0])


        if (data.password !== data.confirmPassword) {
            return setError("Password Doesn't match")
        }

        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                fetch(image_url, {
                    method: "POST",
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgResponse => {
                        if (imgResponse.success) {
                            const img = imgResponse.data.display_url;
                            updateUserProfile(data.name, img)
                            .then(()=>{})
                            .catch(error=>{
                                console.log(error.message)
                            })
                        }
                    })
                console.log(createdUser)

            })
            .catch(err => {
                setError(err.message)
                console.log(err.message)
            })
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
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} type="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input {...register("confirmPassword", { required: true })} type="password" placeholder="confirm password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Confirm Password is required</p>}
                                    {error && <p className="text-red-600">{error}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload Your Image</span>
                                    </label>
                                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full" />
                                    {errors.photo?.type === 'required' && <p className="text-red-600">Photo is Required</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Register" />
                                </div>
                                <p>Already Have an account? Please <Link className="text-primary hover:underline" to="/login">Login</Link></p>
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

export default Register;