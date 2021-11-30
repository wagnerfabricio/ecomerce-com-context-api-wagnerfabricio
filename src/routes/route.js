import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const token = localStorage.getItem("@kenzieshop:token");

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate && !token ? <Redirect to="/login" /> : <Component />;
      }}
    />
  );
};

export default Route;
