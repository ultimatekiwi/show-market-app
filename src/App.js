import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import axios from "axios";

import "./App.css";


function showItems(items) {
  document.getElementById('res').innerHTML = `
  <div class="container mt-3">
    <div class="card-header">
      Items
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(items, null, 2)}</pre>
    </div>
  </div>
  `
}


{/* <pre>${JSON.stringify(items)}</pre> */}
// 


const App = () => {
  const [itemData, setItemData] = useState([]);
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
    const extractPageData = ({ page, per_page, total_pages, items }) => {
      setCurrentPage(page);
      setPerPage(per_page);
      setTotalPages(total_pages);
      setItemData(items);
    };

    extractPageData(stadiums);

    showItems(itemData);
    // console.log(items);
    
    // console.log(currentPage,
    //   perPage,
    //   totalPages)
  }, []);

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

    showItems(itemData);
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
      <div>
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
    </div>
  );
};

export default App;
