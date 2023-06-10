

const Instructor = ({ instructor }) => {
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className="rounded-lg w-full" src={instructor.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructor.name}</h2>
                    <p>Number Of classes: {instructor.number_of_classes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">see classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;