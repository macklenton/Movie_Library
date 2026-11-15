function MovieCard({ data, onDelete }) {
    return (
        <article>

            <h2>
                {data.title}
            </h2>

            <p>
                Director: {data.director}
            </p>

            <p>
                Release Year: {data.releaseYear}
            </p>

            <p>
                {data.synopsis}
            </p>

            <button
                type="button"
                onClick={onDelete}
            >
                Delete Movie
            </button>

        </article>
    );
}

export default MovieCard;