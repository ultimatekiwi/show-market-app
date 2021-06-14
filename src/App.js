import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import axios from "axios";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [totalPages, setTotalPages] = useState(1);

  const stadiums = require("./data/stadiums.json");

  // const extractPageData = ({page, per_page, total_pages}) => {
  //   setCurrentPage(page);
  //   setPerPage(per_page);
  //   setTotalPages(total_pages);
  // }

  // load locally-stored GETstadiums response data
  // TODO: actually fetch live data from theshow api
  useEffect(() => {
    const extractPageData = ({ page, per_page, total_pages }) => {
      setCurrentPage(page);
      setPerPage(per_page);
      setTotalPages(total_pages);
    };

    extractPageData(stadiums);
    // console.log(currentPage,
    //   perPage,
    //   totalPages)
  }, [stadiums]);

  //   JSON.stringify(
  //     {
  // currentPage,
  // perPage,
  // totalPages
  //     },
  //     null,
  //     2
  //   )
  // )

  const onClick = () => {
    setLoading(true);

    setTimeout(() => {
      console.log("hopefully getting stadiums");
      setLoading(false);
    }, 500);
    // setLoading(!loading)
  };

  return (
    <div className="container">
      <Header title={"show-market-app"} buttonList={[]} />
      <Button
        color={loading ? "red" : "green"}
        text={loading ? "Loading..." : "GET Stadiums"}
        onClick={onClick}
      />
      <code>
        {JSON.stringify(
          {
            currentPage,
            perPage,
            totalPages,
          },
          null,
          2
        )}
      </code>
    </div>
  );
};

export default App;
