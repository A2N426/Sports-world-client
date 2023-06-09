
const Class = ({ singleClass }) => {
    return (
        <div>
            <div className="card border hover:border-red-400 w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={singleClass.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{singleClass.className}</h2>
                    <h2 className="card-title">{singleClass.instructor}</h2>
                    <p>Are You Ready for the 2023 WNFC Season? Gear Up for the 2023 Season. </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;