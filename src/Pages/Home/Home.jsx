import Banner from "../../components/Home/Banner";
import PopularClasses from "../../components/Home/PopularClasses";
import PopularInstructor from "../../components/Home/PopularInstructor";
import World from "../../components/Home/World";



const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <PopularInstructor />
            <World />
        </div>
    );
};

export default Home;