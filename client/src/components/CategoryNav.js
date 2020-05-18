import React from "react";
import { Link } from "react-router-dom";

export default function CategoryNav() {
  return (
    <>
      <nav>
        <Link to="/art">
          <button>Art</button>
        </Link>
        <Link to="/cinema">
          <button>Cinema</button>
        </Link>
        <Link to="/health">
          <button>Health</button>
        </Link>
        <Link to="/gaming">
          <button>Gaming</button>
        </Link>
        <Link to="/music">
          <button>Music</button>
        </Link>
      </nav>
    </>
  );
}
