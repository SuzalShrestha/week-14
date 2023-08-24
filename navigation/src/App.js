import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Link, NavLink, useHistory } from "react-router-dom";

const handleClick = () => {
  const history = useHistory();
  window.alert("Sending info to the db");
  history.push("/");
};
function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <button onClick={handleClick}>Home</button>
      <h2>Link tag</h2>
      <nav className="comp nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/stocks">Stocks</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <h2>NavLink Tag</h2>
      <nav className="comp nav">
        <ul>
          <li>
            <NavLink
              exact
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              exact
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              to="/stocks"
            >
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
