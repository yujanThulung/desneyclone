import React, { useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { HiChevronLeft,HiChevronRight} from "react-icons/hi2";

function MovieList({ genreId }) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);


    useEffect(() => {
        getMovieByGenreId(genreId);
    }, [genreId]);


    const slideRight = (element) => {
    element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
    element.scrollLeft -= 500;
    }


    const getMovieByGenreId = (genreId) => {
        GlobalApi.getMovieByGenreId(genreId)
            .then((resp) => {
                console.log(resp.data.results);
                setMovieList(resp.data.results);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    };

    return (
        <div className="relative">
            <IoChevronBackOutline className="hidden text-[50px] text-white  md:block p-2 cursor-pointer z-10 top-0 absolute mt-[150px]" onClick={()=>slideRight(elementRef.current)}/>


            <div ref={elementRef} className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3 ">
                {movieList.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
            </div>

            <IoChevronForwardOutline className="hidden text-[50px] text-white md:block p-2 cursor-pointer z-10 top-0 absolute right-0 mt-[150px]" onClick={()=>slideRight(elementRef.current)}/>
        </div>
    );
}

export default MovieList;
