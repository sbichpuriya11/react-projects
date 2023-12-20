import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";
function Row(prop) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState('');
    // snippet of code which runs based on a specific condition/variable
   useEffect(()=>{
    // if [], run once when the row loads, and don't run again.
    async function fetchData(){
        const request = await axios.get(prop.fetchUrl);
        //htts://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}&language=en-US;
        //console.log(request);

        setMovies(request.data.results);
        return request;
    }

    fetchData();
   },[prop.fetchUrl]);

   //console.log(movies);

   const opts = {
       height:"390",
       width:"100%",
       playerVars:{
           //https://developers.google.com/youtube/player_parameters
           autoplay:1,
       }
   }

   const handleClick = (movie)=>{
        if(trailerUrl)
            setTrailerUrl('');
        else
            movieTrailer(movie?.name || "").then(url=>{
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error=>{
                console.log(error);
            })
   }
    return (
        <div className="row">
            {/* title */}
            <h2>{prop.title}</h2>

            {/* Container->posters */}
            <div className="row_posters">
                {/* several row_posters */}

                {movies.map((movie)=>(
                   <img 
                    className={`row_poster ${prop.isLargeRow && "row_posterLarge"}`} 
                    src={`${base_url}${prop.isLargeRow? movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name} 
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    />
                ))}
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    );
}

export default Row
