import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../util/httpClient";
import { Loading } from "../components/Loading";
import placeholder from "../placeholder.jpg";


export function MovieDetails() {
    const {movieId} = useParams();//esto es para que me traiga el id de la pelicula y lo captura en movieId
    const [isLoading, setIsLoading] = useState(true);//para que me traiga el estado de la pelicula
    const [movie, setMovie] = useState(null);//esto es para que me traiga la pelicula y lo captura en movie


    useEffect(() => {
        setIsLoading(true);

        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);//esto guarda la pelicula
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading) {
        return <Loading />;
    }
    
    // if (!movie) {
    //     return null;
    // }

    const imgUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : placeholder;
    return (
        <div className={styles.contenedor}>
    <div className={styles.details}>
        <img className={`${styles.detailsInfo} ${styles.movieImg}`} src={imgUrl} alt={movie.title} />
        <div className={`${styles.detailsInfo} ${styles.movieDetail}s`}>
            <p className={styles.firstP}>
                <strong>Title:</strong> {movie.title}
            </p>
            <p>
            <strong>Genres:</strong>{" "}
                {movie.genres.map((genre => genre.name)).join(", ")}
            </p>
            <p>
            <strong>Description</strong> {movie.overview}
            </p>    
        </div>
        
    </div>
    </div>
    )
}