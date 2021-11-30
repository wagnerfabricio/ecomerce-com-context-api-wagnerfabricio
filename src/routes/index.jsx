import { Switch } from "react-router-dom";
import Route from "./route";
// import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import User from "../pages/User";

const Routes = () => {
  return (
    <Switch>
      <Route component={Cart} path="/cart" />
      <Route component={Shop} exact path="/" />
      {/* <Route component={Home} exact path="/" /> */}
      <Route isPrivate component={Checkout} path="/checkout" />
      <Route component={Login} path="/login" />
      <Route component={Signup} path="/signup" />
      <Route isPrivate component={User} path="/useraccount" />
    </Switch>
  );
};

export default Routes;
