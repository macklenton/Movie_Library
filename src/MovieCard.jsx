function MovieCard({data, onDelete}) {
    return(
        <>
        <h2>{data.title} </h2>
        <p>{data.director}</p>
        <p>{data.releaseYear}</p>
        <p>{data.synopsis}</p>
        <button type="button" onClick={onDelete}> Delet Movie</button>
        </>
    )
    
}
export default MovieCard