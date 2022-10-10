// import movie from "../movies.json";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import placeholder from "../placeholder.jpg";

export function MovieCard({movie}) {
    
    const imgeUrl =  movie.poster_path 
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` //si existe la imagen
    :  placeholder;//si no existe la imagen

    return (
        <li className={styles.movieCard}>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={`/movies/${movie.id}`}>
            <img 
            width={230}
            height={345}
            className={styles.movieImg} 
            src={imgeUrl} 
            alt={movie.title} />
            <div><h3 className="movieTitle">{movie.title}</h3></div>
        </Link>
        </li>
    );
}