import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops! Looks like something went wrong.</h1>
      <p>{error?.statusText || error?.message || "Unknown error occurred"}</p>
    </div>
  );
}
