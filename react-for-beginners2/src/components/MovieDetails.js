import PropTypes from "prop-types";

function MovieDetails({coverImg, title, description}) {
  return (
  <div>
    <img src={coverImg} alt={title}/>
    <h2>
      {title}
    </h2>
      <p>{description}</p>
  </div>
  );
}

export default MovieDetails;