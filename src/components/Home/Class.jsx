import { Zoom } from "react-awesome-reveal";
import {Link} from "react-router-dom"

const Class = ({ singleClass }) => {
    return (
        <Zoom delay={100} duration={1000}>
            <div className="card border hover:border-red-400 lg:w-80 w-80 bg-base-100 mx-auto shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={singleClass.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{singleClass.className}</h2>
                    <h2 className="card-title">{singleClass.instructor}</h2>
                    <p>Are You Ready for the 2023 WNFC Season? Gear Up for the 2023 Season. </p>
                    <div className="card-actions">
                        <Link to="/classes" className="btn btn-primary">Enroll Now</Link>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default Class;