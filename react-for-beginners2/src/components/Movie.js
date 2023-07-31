import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";


function Movie({id, coverImg, title, summary, genres}) {
  return (
  <div className={styles.movie}>
    <img src={coverImg} alt="No Poster" style={{ fontSize: "50px", fontWeight: "1000" }} className={styles.movie_img} />
    <div>
    <h2  className={styles.movie_title}>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary }</p>
    <ul className={styles.movie_genres}>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}

    </ul>
    </div>
  </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;