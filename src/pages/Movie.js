import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const initialMovie = {
  title: "Doctor Strange",
  time: 115,
  genres: ["Action", "Adventure", "Fantasy"],
};

export default function Movie() {
  const [movie, setMovie] = useState(initialMovie);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data && typeof data === "object") {
          setMovie(data);
        } else {
          console.error("Movie data is not valid:", data);
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        <div>
          {movie.genres && movie.genres.map((genre) => (
            <span key={genre}>{genre} </span>
          ))}
        </div>
      </main>
    </>
  );
}