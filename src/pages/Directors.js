import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const initialDirectors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

export default function Directors() {
  const [directors, setDirectors] = useState(initialDirectors);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDirectors(data);
        } else {
          console.error("Directors data is not an array:", data);
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
        <h1>Directors Page</h1>
        <ul>
          {directors.map((director) => (
            <li key={director.name}>
              {director.name}
              <ul>
                {director.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}