import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageClasses = () => {
    const [allClasses, setAllClasses] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/allClasses`)
            .then(res => res.json())
            .then(data => setAllClasses(data))
    }, [])

    // feedback working here
    const [feedText, setFeedbackText] = useState("")
    const handleFeedbackTextChange = (event) => {
        setFeedbackText(event.target.value);
    };
    const [id, setId] = useState("")
    const [axiosSecure] = useAxiosSecure()
    const handleFeedback = id => {
        console.log("feedback", feedText)
        axiosSecure.put(`/classes/${id}`, {feedText})
        .then(res=>{
            console.log(res.data)
        })
    }
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center font-semibold mt-20 mb-10">Here are all the classes that you will manage</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Instructor</th>
                                <th>Email</th>
                                <th>Seats</th>
                                <th>Fee</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allClasses.map((singleClass, index) =>
                                    <tr key={index}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{singleClass.className}</td>
                                        <td>{singleClass.instructor}</td>
                                        <td>{singleClass.instructorEmail}</td>
                                        <td>{singleClass.available_seats}</td>
                                        <td>{singleClass.price}</td>
                                        <td>{singleClass.status}</td>
                                        <td className="flex gap-2">

                                            <span onClick={() => window.my_modal_3.showModal()}>
                                                <button onClick={() => setId(singleClass._id)} className="btn btn-xs btn-primary">Feedback</button>
                                            </span>

                                            <button className="btn btn-primary btn-xs">approve</button>

                                            <button className="btn btn-error bg-red-600 btn-xs text-white">Deny</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <div className="py-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Write Your Feedback</span>
                                </label>
                                <textarea onChange={handleFeedbackTextChange}
                                    value={feedText} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                            </div>
                        </div>
                        <div className="text-end">
                            <button type="submit" onClick={() => handleFeedback(id)} className="btn btn-primary btn-xs">Send</button>
                        </div>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default ManageClasses;