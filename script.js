const TMDB_API_KEY = "b1d900a73f1440ea5a876ea268f06be5";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const options = {method: 'GET', headers: {accept: 'application/json'}};

let image_list = fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${TMDB_API_KEY}`, options) // get's the popular movies
  .then(response => response.json())
    .then(response => {
        console.log(response);
        bannerMovie = response.results[0]
        
        let image_list = fetch(`https://api.themoviedb.org/3/movie/${bannerMovie.id}/images?api_key=${TMDB_API_KEY}`, options) // get's the image list of the most popular  movie
            .then(response => response.json())
            .then(image_list => {console.log(response)
          let bannerImg = image_list.backdrops[0]
          
          
          
          const bannerMovieEl = document.getElementById("banner-movie")
        const banner = document.createElement("img")
        banner.src = IMAGE_PATH + bannerImg.file_path
        bannerMovieEl.appendChild(banner)
    })
            .catch(err => console.error(err));
          
        // get the banner movies image
        console.log(image_list)
        return image_list
    })
  .catch(err => console.error(err));
/*{
    "aspect_ratio": 0.667,
    "height": 3000,
    "iso_639_1": "en",
    "file_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "vote_average": 4.71,
    "vote_count": 110,
    "width": 2000
}*/