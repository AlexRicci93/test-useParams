import { useState } from "react";
import { Link } from "react-router-dom";

export function List() {
    
    const [input, setInput] = useState("")
    const [movies, setMovies] = useState([])
 

    function handleInputChange(event)  {

        const value = event.target.value
        setInput(value)

    }

    async function fetchMovies() {

        const response = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=42f82aeb`)
        const json = await response.json()

        setMovies([...json.Search])
        
    }
    
    return(
        

        <div >
        <input value={input} onChange={handleInputChange}/>
        <button onClick={fetchMovies}>Search Film</button>
        

        <div>
            {movies.map(movie=> (
                <Link to={`/details/${movie.imdbID}`}>
                    <img src={movie.Poster} alt="poster"/>
                    <h2>{movie.Title}</h2>
                </Link>
            ))}
        </div>
        </div>
        
    )
}