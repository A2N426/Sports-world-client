import { useState } from "react";
import Container from "../../../Shared/Container/Container";

const AddClass = () => {

    // select available seats options here
    const options1 = [
        { value: '', text: 'Available Seats' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '8', text: '8' },
        { value: '9', text: '9' },
        { value: '10', text: '10' },
        { value: '11', text: '11' },
        { value: '12', text: '12' },
        { value: '13', text: '13' },
        { value: '14', text: '14' },
        { value: '15', text: '15' },
        { value: '16', text: '16' },
        { value: '17', text: '17' },
        { value: '18', text: '18' },
        { value: '19', text: '19' },
        { value: '20', text: '20' },
    ];
    const [selected1, setSelected1] = useState(options1[0].value);

    const handleChange1 = event => {
        setSelected1(event.target.value);
    };





    return (
        <Container>
            <form className="border-2 p-5 border-primary gap-5 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg">
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Available Seats</span>
                        </label>
                        <select className="input input-bordered w-full max-w-xs" value={selected1} onChange={handleChange1}>
                            {options1.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Monthly Fee</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input readOnly type="text" placeholder="STATUS IS PENDING" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary w-1/2">ADD ClASS</button>
                </div>
            </form>
        </Container>
    );
};

export default AddClass;