import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems neat you.
        </h5>
        <Button variant="outlined" onClick={() => navigate("/search")}>
          Explore nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
