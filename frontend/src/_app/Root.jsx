import React from "react";
import { Routes, Route } from "react-router-dom";
import { routers } from "../_helpers/routers";

const Root = () => {
  return (
    <Routes>
      {routers.map((route) => {
        return <Route {...route} />;
      })}
    </Routes>
  );
};

export default Root;
