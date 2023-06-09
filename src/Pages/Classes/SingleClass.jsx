import { Card } from "flowbite-react";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SingleClass = ({ singleClass }) => {
    const [role] = useRole()
    const {user}=useAuth()
    const navigate = useNavigate();
    const handleSelect = (id) =>{
        if(!user){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'og in before selecting the course.',
                showConfirmButton: false,
                timer: 1500
              })
              navigate("/login")
        }
        fetch(`${import.meta.env.VITE_API_URL}/`)
    }
    return (
        <div>
            <Card
            className={`${singleClass.available_seats === 0 ? "cursor-not-allowed bg-red-900 text-white" : ""}`}
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={singleClass.image}
            >
                <div>
                    <p className="text-xl"><span className="font-semibold">Class: </span>{singleClass.className}</p>
                    <p className="text-xl"><span className="font-semibold">Instructor: </span>{singleClass.instructor}</p>
                    <p className="text-xl dark:text-gray-400">
                        <p>
                            <span className=" font-semibold">Available Seats:</span> {singleClass.available_seats}
                        </p>
                    </p>
                    <p className="text-xl"><span className="font-semibold">Price: </span>${singleClass.price}</p>
                </div>
                {singleClass.available_seats === 0 && !role ?
                    <button className="btn bg-blue-600 btn-disabled">Can not Select</button>
                    :

                    <button onClick={()=>handleSelect(singleClass._id)} className="btn btn-active btn-primary">Select</button>
                }
            </Card>
        </div>
    );
};

export default SingleClass;