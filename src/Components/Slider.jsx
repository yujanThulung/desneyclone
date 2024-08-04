import React from "react";
import GlobalApi from "../Services/GlobalApi";
import { useState, useEffect,useRef } from "react";
import { HiChevronLeft,HiChevronRight} from "react-icons/hi2";

// backdrop_path
// :
// "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;



function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos()
            .then((res) => {
                console.log(res.data.results);
                setMovieList(res.data.results);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const slideRight=(element) =>{
        element.scrollLeft+=screenWidth-110;
    }
    const slideLeft=(element) =>{
        element.scrollLeft-=screenWidth-110;
    }

    return (
        <div>

            {/* this is an arrow  */}
            <HiChevronLeft className="hidden md:block text-[30px] absolute mx-5 mt-[150px] cursor-pointer" onClick={()=>slideRight(elementRef.current)}/>
                
            <HiChevronRight className="hidden md:block text-[30px] absolute mx-5 mt-[150px] cursor-pointer right-0" onClick={()=>slideLeft(elementRef.current)}/>
            


            <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
                {movieList.map((item) => (
                    <img
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        alt="slider"
                        className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-lg hover:border-2 border-sky-100 cursor-pointer transition-all duration-100 ease-in"
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Slider;
