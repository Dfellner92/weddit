import React, { useState, useEffect } from "react";
import { Router, Link, Redirect, BrowserRouter } from "react-router-dom";
import ReactLoading from "react-loading";
import Dashboard from "./Dashboard";

function Preloader1() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      {!done ? (
        <ReactLoading type={"bars"} color={"green"} height={100} width={200} />
      ) : (
        <BrowserRouter>
          <Redirect to="./Dashboard">
            <Dashboard></Dashboard>
          </Redirect>
        </BrowserRouter>
      )}
    </React.Fragment>
  );
}

export default Preloader1;
