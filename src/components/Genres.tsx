import useGenres from "./hooks/useGenres"


const Genres = () => {
  const { data : genres, error } = useGenres()
  if (error) return <p className="text-danger">{error.message}</p>;
  return (
    <ul>
      {genres?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default Genres;
