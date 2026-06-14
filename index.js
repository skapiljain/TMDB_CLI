
require('dotenv').config()
categorMap = {
    playing: 'now_playing',
    popular: 'popular',
    top: 'top_rated',
    upcoming: 'upcoming'
}
function getCategory() {
    const arg = process.argv.slice(2);
    const typeIndex = arg.indexOf('--type');
    return typeIndex !== -1 ? arg[typeIndex + 1] : null;
}

function fetchMovies(category) {

    const api = process.env.TMDB_API_KEY

    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${api}`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            if (!data.results) {
                console.log("API Error:", data);
                return;
            }

            console.log("Total movies:", data.results.length);
            console.log(data.results.slice(0, 3));
        })
        .catch(err => console.error(err));


}
const user = getCategory();
const isvalid = categorMap[user];

if (isvalid) {
    fetchMovies(isvalid);
}
else {
    console.log("Invalid");
    process.exit(1);
}
