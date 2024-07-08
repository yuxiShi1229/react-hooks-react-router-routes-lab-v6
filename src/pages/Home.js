import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const initialMovies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Trolls" },
  { id: 3, title: "Jack Reacher: Never Go Back" },
];

export default function Home() {
  const [movies, setMovies] = useState(initialMovies);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error("Movies data is not an array:", data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </div>
        ))}
      </main>
    </>
  );
}