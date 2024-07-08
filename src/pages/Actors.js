import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const initialActors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Wood"],
  },
  {
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
    ],
  },
];

export default function Actors() {
  const [actors, setActors] = useState(initialActors);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setActors(data);
        } else {
          console.error("Actors data is not an array:", data);
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
        <h1>Actors Page</h1>
        <ul>
          {actors.map((actor) => (
            <li key={actor.name}>
              {actor.name}
              <ul>
                {actor.movies.map((movie) => (
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