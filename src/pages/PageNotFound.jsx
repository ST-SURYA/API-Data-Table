import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";

const PageNotFound = () => {
  const navigate = useNavigate();

  // Redirecting to Home page
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  });
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div>
        <div className="card bg-danger bg-opacity-50 shadow-lg">
          <div className="alert alert-danger mt-5 mx-5">
            404 - Page Not Found
          </div>
          <div className="text-danger">
            <Loader />
          </div>
          <span className="text-danger">Redirecting</span>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
