import { useState } from "react";
import { getMovies } from "../movieService";

const Movies = () => {
    const [data, setData] = useState([]);

    const handleClick = async() => {
        const movies = await getMovies();
        setData(movies);
    };

    return (
    <>
        <h2>The Movies</h2>
        <button type="button" onClick={handleClick}>Hent filmer</button>
        {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
    </>
)}

export default Movies;