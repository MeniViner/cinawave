const apiKey = '3d3bdf59fe98f22449ae9f0c6c3727f6';
const baseUrl = 'https://api.themoviedb.org/3/trending/all/day';

const fetchTrendingMovies = async (page) => {
    const url = `${baseUrl}?api_key=${apiKey}&page=${page}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching data for page ${page}:`, error);
        return [];
    }
};

const getAllTrendingMovies = async () => {
    let allMovies = [];
    let movieIdsSet = new Set();

    for (let page = 1; page <= 25; page++) {
        const movies = await fetchTrendingMovies(page);

        // Filter movies that have original_title and not already added
        const filteredMovies = movies.filter(movie => {
            return movie.original_title && !movieIdsSet.has(movie.id);
        });

        filteredMovies.forEach(movie => {
            movieIdsSet.add(movie.id);
        });

        allMovies = [...allMovies, ...filteredMovies];
    }

    return allMovies;
};

// Example usage
getAllTrendingMovies().then((movies) => {
    console.log('All trending movies with original_title, appearing only once:', movies);
});

export default getAllTrendingMovies;
