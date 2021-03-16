import { useState } from "react";
import { getMovies } from "../movieService";
import Movie from "./Movie";
import styled from 'styled-components';

const StyledButton = styled.button`
    box-shadow: inset 0px 1px 3px 0px #91b8b3;
	background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color: #768d87;
	border-radius: 5px;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 12px;
	font-weight: bold;
	padding: 11px 23px;
	text-decoration: none;
    text-transform: uppercase;
`;

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const handleClick = async() => {
        const data = await getMovies();
        setMovies(data);
    };


    return (
    <>
        <StyledButton type="button" onClick={handleClick}>Hent filmer</StyledButton>
        {movies.map(movies => <Movie title={movies.title} actor={movies.actor}/>)}
    </>
)}

export default Movies;