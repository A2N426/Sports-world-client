import { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import SingleInstructor from "./SingleInstructor";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/instructors`)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <Container>
            <div className="mt-10 mb-10 lg:flex justify-between items-center">
                <div>
                    <h1 className="text-primary text-3xl font-semibold font-sans">Our All Chief Instructors Here</h1>
                    <p className="text-primary lg:mt-8">Sharing culture and openness to the world </p>
                    <p className="text-primary  lg:mt-4">are at the heart of our associative project.</p>
                </div>
                <div>
                <button className="btn btn-active btn-primary uppercase mt-5 lg:mt-0">Become a instructor</button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {instructors.map((instructor, index) => <SingleInstructor key={index} instructor={instructor}></SingleInstructor>)}
            </div>
        </Container>
    );
};

export default Instructors;