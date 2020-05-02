//dependencies
import React from "react";
import { Link, Redirect, Route, useHistory } from "react-router-dom";
//styles
import "./styles/App.css";
//components
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProjectList from "./components/ProjectList";

const App = () => {
  const isLogged = !!localStorage.getItem("token");
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("User Id");
    history.push("/home");
  };
  return (
    <div className="App">
      <nav>
        <Link to="/home">
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
            <Link>
              <button onClick={logout}>Logout</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        )}
      </nav>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/projects" component={ProjectList} />
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
