import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

import axios from "axios";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  const onClick = () => {
    setLoading(!loading)

    setTimeout(() => {
      console.log("hopefully getting stadiums")   
      setLoading(false)
    }, 1000);
    // setLoading(!loading)

  }

  return (
    <div className="container">
      <Header title={"show-market-app"} buttonList={[]} />
      <Button
        color={loading ? "red" : "green"}
        text={loading ? "Loading..." : "GET Stadiums"}
        onClick={onClick}
      />
    </div>
  );
};

export default App;
