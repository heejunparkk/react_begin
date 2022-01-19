import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({ id, coverImg, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <div>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3>{year}</h3>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
