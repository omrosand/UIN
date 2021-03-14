import client from './client';

const movieFields = `
    title,
    'actor': actor->actor,
`;

export const getMovies = async() => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
}