import MovieCard from "./MovieCard";
import { useState } from "react";

function App() {
    const initialMovies = [
        {
            id: 1,
            title: "Inception",
            director: "Christopher Nolan",
            releaseYear: 2010,
            genre: ["Sci-Fi", "Action", "Thriller"],
            rating: 8.8,
            synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into someone's mind."
        },
        {
            id: 2,
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            releaseYear: 1994,
            genre: ["Drama"],
            rating: 9.3,
            synopsis: "Two convicts form a friendship while seeking consolation and eventual redemption during their time in prison."
        },
        {
            id: 3,
            title: "Interstellar",
            director: "Christopher Nolan",
            releaseYear: 2014,
            genre: ["Sci-Fi", "Adventure", "Drama"],
            rating: 8.7,
            synopsis: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival."
        },
        {
            id: 4,
            title: "The Dark Knight",
            director: "Christopher Nolan",
            releaseYear: 2008,
            genre: ["Action", "Crime", "Drama"],
            rating: 9.0,
            synopsis: "Batman faces his greatest challenge when the Joker brings chaos and terror to Gotham City."
        },
        {
            id: 5,
            title: "Titanic",
            director: "James Cameron",
            releaseYear: 1997,
            genre: ["Romance", "Drama"],
            rating: 7.9,
            synopsis: "A young couple from different social backgrounds falls in love aboard the ill-fated RMS Titanic."
        },
        {
            id: 6,
            title: "The Matrix",
            director: "Lana Wachowski, Lilly Wachowski",
            releaseYear: 1999,
            genre: ["Sci-Fi", "Action"],
            rating: 8.7,
            synopsis: "A computer programmer discovers that reality is a simulated world controlled by intelligent machines."
        },
        {
            id: 7,
            title: "Avatar",
            director: "James Cameron",
            releaseYear: 2009,
            genre: ["Sci-Fi", "Adventure", "Fantasy"],
            rating: 7.9,
            synopsis: "A former Marine travels to Pandora and becomes involved in a conflict between humans and the native Na'vi."
        },
        {
            id: 8,
            title: "Joker",
            director: "Todd Phillips",
            releaseYear: 2019,
            genre: ["Crime", "Drama", "Thriller"],
            rating: 8.3,
            synopsis: "A struggling comedian descends into madness and becomes the infamous criminal known as the Joker."
        },
        {
            id: 9,
            title: "Spirited Away",
            director: "Hayao Miyazaki",
            releaseYear: 2001,
            genre: ["Animation", "Adventure", "Fantasy"],
            rating: 8.6,
            synopsis: "A young girl enters a mysterious world of spirits and must find a way to rescue her transformed parents."
        },
        {
            id: 10,
            title: "The Lion King",
            director: "Roger Allers, Rob Minkoff",
            releaseYear: 1994,
            genre: ["Animation", "Adventure", "Drama"],
            rating: 8.5,
            synopsis: "A young lion prince must overcome tragedy and reclaim his rightful place as king of the Pride Lands."
        },
        {
            id: 11,
            title: "Avengers: Endgame",
            director: "Anthony Russo, Joe Russo",
            releaseYear: 2019,
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: 8.4,
            synopsis: "The Avengers assemble for one final mission to reverse the destruction caused by Thanos."
        },
        {
            id: 12,
            title: "Forrest Gump",
            director: "Robert Zemeckis",
            releaseYear: 1994,
            genre: ["Drama", "Romance"],
            rating: 8.8,
            synopsis: "A kind-hearted man experiences several defining historical moments while navigating life and love."
        },
        {
            id: 13,
            title: "Black Panther",
            director: "Ryan Coogler",
            releaseYear: 2018,
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: 7.3,
            synopsis: "T'Challa returns to Wakanda to take his place as king but faces a powerful challenger to his throne."
        },
        {
            id: 14,
            title: "Coco",
            director: "Lee Unkrich",
            releaseYear: 2017,
            genre: ["Animation", "Family", "Fantasy"],
            rating: 8.4,
            synopsis: "A young boy journeys into the Land of the Dead to uncover his family's history and musical heritage."
        },
        {
            id: 15,
            title: "Gladiator",
            director: "Ridley Scott",
            releaseYear: 2000,
            genre: ["Action", "Drama", "Adventure"],
            rating: 8.5,
            synopsis: "A betrayed Roman general becomes a gladiator and seeks justice against the emperor who destroyed his life."
        }
    ];

    const [movies, setMovies] = useState(initialMovies);

    function handleSUbmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const title = formData.get("name");
        const director = formData.get("director");
        const releaseYear = Number(formData.get("year"));
        const rating = Number(formData.get("rating"));
        const synopsis = formData.get("synopsis");

        const genre = formData.get("genre")
            .split(",")
            .map(item => item.trim());

        const newMovie = {
            id: Date.now(),
            title: title,
            director: director,
            releaseYear: releaseYear,
            rating: rating,
            synopsis: synopsis,
            genre: genre
        };

        setMovies(previousMovies => [...previousMovies, newMovie]);
        form.reset();
    }

    function deleteMovie(id) {
        setMovies(previousMovies =>
            previousMovies.filter(movie => movie.id !== id)
        );
    }

    return (
        <main>

            {/* Page Heading */}
            <header>
                <p>Your personal collection</p>
                <h1>My Movie Library</h1>
                <p>Discover, manage and organize your favourite movies.</p>
            </header>

            <div>

                {/* Movie Collection */}
                <section>

                    <div>
                        <h2>Your Collection</h2>
                        <span>{movies.length} Movies</span>
                    </div>

                    <div>
                        {movies.map((movie) => (
                            <div key={movie.id}>
                                <MovieCard
                                    data={movie}
                                    onDelete={() => deleteMovie(movie.id)}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Add Movie Form */}
                <section>

                    <div>
                        <h2>Add a New Movie</h2>
                        <p>Enter the details below to add a movie to your collection.</p>
                    </div>

                    <form onSubmit={handleSUbmit}>

                        <div>
                            <label htmlFor="name">Movie Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter movie title..."
                            />
                        </div>

                        <div>
                            <label htmlFor="director">Director</label>
                            <input
                                type="text"
                                id="director"
                                name="director"
                                placeholder="Enter director..."
                            />
                        </div>

                        <div>
                            <label htmlFor="year">Release Year</label>
                            <input
                                type="number"
                                id="year"
                                name="year"
                                placeholder="Year of release"
                            />
                        </div>

                        <div>
                            <label htmlFor="rating">Rating</label>
                            <input
                                type="number"
                                id="rating"
                                min={0}
                                max={10}
                                step={0.1}
                                name="rating"
                                placeholder="Enter rating..."
                            />
                        </div>

                        <div>
                            <label htmlFor="genre">Genre</label>
                            <input
                                type="text"
                                name="genre"
                                id="genre"
                                placeholder="e.g. Action, Drama, Thriller"
                            />
                        </div>

                        <div>
                            <label htmlFor="synopsis">Synopsis</label>
                            <textarea
                                name="synopsis"
                                id="synopsis"
                                rows="4"
                                placeholder="Enter a brief synopsis..."
                            ></textarea>
                        </div>

                        <div>
                            <button type="submit">
                                Add Movie
                            </button>
                        </div>

                    </form>
                </section>

            </div>
        </main>
    );
}

export default App;