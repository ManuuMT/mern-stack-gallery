import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};

const NotFound = () => {
  const error = useRouteError() as RouteError;
  console.log(error);

  return (
    <div>
      <h1>Error 404</h1>
      <h2>{error.statusText || error.message}</h2>
    </div>
  );
};
export default NotFound;
