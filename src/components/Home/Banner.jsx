import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/check.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[550px] h-[300px] mt-3">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full " />
                    <div className="absolute h-full flex bg-gradient-to-r from-[#290b2d] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold '>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl bg-gradient-to-r from-blue-600 via-rose-500 to-indigo-400 inline-block text-transparent bg-clip-text'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight hover:btn hover:btn-secondary outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32 bg-gradient-to-r 
                            via-pink-800 from-purple-900 
                            to-purple-900  ">MORE INFO</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide4" className="lg:w-14 lg:flex items-center justify-center lg:rounded-full lg:ring-2 transition ease-in-out  
                        hover:scale-110
                        focus:scale-110  duration-300 py-5"><FaArrowLeft className='text-white text-lg' /></a>
                        <a href="#slide2" className="lg:w-14 lg:flex items-center justify-center lg:rounded-full lg:ring-2 transition ease-in-out  
                        hover:scale-110
                        focus:scale-110  duration-300 py-5"><FaArrowRight className='text-white text-lg' /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full " />
                    <div className="absolute  h-full flex bg-gradient-to-r from-[#27042d] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-secondary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32 bg-gradient-to-r 
                            via-pink-900 from-purple-900 
                            to-purple-900  ">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide1" className="lg:w-14 lg:flex items-center justify-center lg:rounded-full lg:ring-2 transition ease-in-out  
                        hover:scale-110
                        focus:scale-110  duration-300 py-5"><FaArrowLeft className='text-white text-lg' /></a>
                        <a href="#slide3" className="lg:w-14 lg:flex items-center justify-center lg:rounded-full lg:ring-2 transition ease-in-out  
                        hover:scale-110
                        focus:scale-110  duration-300 py-5"><FaArrowRight className='text-white text-lg' /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="" className="w-full " />
                    <div className="absolute  h-full flex bg-gradient-to-r from-[#0c376e] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-secondary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32 bg-gradient-to-r 
                            via-slate-500-900 from-cyan-900 
                            via-teal-700
                            to-cyan-900  ">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide2" className="lg:w-14 lg:flex items-center justify-center lg:rounded-full lg:ring-2 transition ease-in-out  
                        hover:scale-110
                        focus:scale-110  duration-300 py-5"><FaArrowLeft className='text-white text-lg' /></a>
                        <a href="#slide4" className="lg:w-14 lg:flex items-center justify-center lg:rounded-full lg:ring-2 transition ease-in-out  
                        hover:scale-110
                        focus:scale-110  duration-300 py-5"><FaArrowRight className='text-white text-lg' /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="" className="w-full " />
                    <div className="absolute  h-full flex bg-gradient-to-r from-[#390707] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-secondary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32 bg-gradient-to-r 
                            via-rose-900 from-red-900 
                            to-red-600 ">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide3" className="lg:w-14 lg:flex items-center justify-center lg:rounded-full lg:ring-2 transition ease-in-out  
                        hover:scale-110
                        focus:scale-110  duration-300 py-5"><FaArrowLeft className='text-white text-lg' /></a>
                        <a href="#slide1" className="lg:w-14 lg:flex items-center justify-center lg:rounded-full lg:ring-2 transition ease-in-out  
                        hover:scale-110
                        focus:scale-110  duration-300 py-5"><FaArrowRight className='text-white text-lg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;