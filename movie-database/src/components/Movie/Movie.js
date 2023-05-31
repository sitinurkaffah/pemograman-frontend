import StyledMovie from "./MovieStyled";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <img
        src={movie.poster}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </StyledMovie>
  );
}

export default Movie;