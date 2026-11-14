function MovieCard({data}) {
    return(
        <>
        <h2>{data.title} </h2>
        <p>{data.director}</p>
        <p>{data.releaseYear}</p>
        <p>{data.synopsis}</p>
        </>
    )
    
}
export default MovieCard