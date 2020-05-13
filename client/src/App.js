//dependencies
import React from "react";
import { Link, Redirect, Route, useHistory } from "react-router-dom";
//styles
import "./styles/App.css";
//components
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProjectList from "./components/ProjectList";
import YourProjects from "./components/YourProjects";
import ProjectById from "./components/ProjectById";
import FundedProjects from "./components/FundedProjects";
import ProjectsByCategory from "./components/ProjectsByCategory";

const App = () => {
  const isLogged = !!localStorage.getItem("token");
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    history.push("/home");
  };
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>VR-Funding</h1>
        </Link>

        {isLogged ? (
          <div>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
            <Link to="/login">
              <button>Log in</button>
            </Link>
          </div>
        )}
      </nav>
      <nav>
        <Link to="/category/art">
          <button>Art</button>
        </Link>
        <Link to="/category/cinema">
          <button>Cinema</button>
        </Link>
        <Link to="/category/health">
          <button>Health</button>
        </Link>
        <Link to="/category/gaming">
          <button>Gaming</button>
        </Link>
        <Link to="/category/music">
          <button>Music</button>
        </Link>
      </nav>

      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/projects" component={ProjectList} />
      <PrivateRoute path="/dashboard">
        <YourProjects />
      </PrivateRoute>
      <PrivateRoute path="/funded" component={FundedProjects} />
      <PrivateRoute path="/fund/:project_id" component={ProjectById} />
      <PrivateRoute path="/category/:category" component={ProjectsByCategory} />
      {/* <PrivateRoute path="/cinema" component={ProjectById} />
      <PrivateRoute path="/health" component={ProjectById} />
      <PrivateRoute path="/gaming" component={ProjectById} />
      <PrivateRoute path="/music" component={ProjectById} /> */}
    </div>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default App;
