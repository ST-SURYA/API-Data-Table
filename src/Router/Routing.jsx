import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <>
      <Routes>
        {/* Routes for Home and Error page */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default Routing;
