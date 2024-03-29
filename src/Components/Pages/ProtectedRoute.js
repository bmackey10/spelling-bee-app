import React from "react";
// import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";
import { Navigate } from "react-router-dom";
import SpellingBeeCardIcon from "../../Icons/spelling-bee-card-icon.svg";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {

  if (checkUser()) {
    return <Component />;
  } else {
    return <Navigate to="/auth" />;
  }
};

export default ProtectedRoute;