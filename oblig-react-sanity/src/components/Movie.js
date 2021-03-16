import styled from 'styled-components';

const StyledMovie = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d0fbd5db;
    margin: 2rem auto;
    border: 3px dashed grey;
    max-width: 400px;
`;

const Movie = ({title, actor}) => (
    <>
        <StyledMovie>
            <h3>{title}</h3>
            <p>{actor}</p>
        </StyledMovie>
    </>
)

export default Movie;