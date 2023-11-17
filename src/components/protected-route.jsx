import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

function ProtectedRoute(props) {
  const { children } = props;
  const user = auth.currentUser;

  if (user === null) {
    return Navigate({ to: "/login" });
  }

  return children;
}

export default ProtectedRoute;
