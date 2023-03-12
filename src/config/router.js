import { useRoutes } from "react-router-dom";
import Home from "../pages/home";

const routing = (props) => {
  return [
    { index: true, path: "/", element: <Home {...props} title="Home" /> },
  ];
};
const PublicRoutes = (props) => {
  const routes = useRoutes(routing(props));
  return routes;
};

export default PublicRoutes;
