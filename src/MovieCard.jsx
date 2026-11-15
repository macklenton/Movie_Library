
function MovieCard({data, onDelete}) {
    return(
        <article className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-500">

            <h2 className="mb-2 text-xl font-bold text-white">
                {data.title}
            </h2>

            <p className="mb-2 text-sm text-slate-400">
                Director: {data.director}
            </p>

            <p className="mb-3 text-sm text-slate-400">
                Release Year: {data.releaseYear}
            </p>

            <p className="mb-5 flex-grow text-sm leading-6 text-slate-300">
                {data.synopsis}
            </p>

            <button
                type="button"
                onClick={onDelete}
                className="rounded-lg bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
            >
                Delete Movie
            </button>

        </article>
    )
    
}
export default MovieCard
