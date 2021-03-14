import { useState } from "react";
import { getMovies } from "../movieService";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const handleClick = async() => {
        const data = await getMovies();
        setMovies(data);
    };

    return (
    <>
        <h2>The Movies</h2>
        <button type="button" onClick={handleClick}>Hent filmer</button>
        {movies?.length > 0 ? <p>{JSON.stringify(movies)}</p> : null}
    </>
)}

export default Movies;