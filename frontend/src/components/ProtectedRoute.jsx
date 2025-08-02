import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return null;
  else if(!user.isAdmin) return <Navigate to='/'></Navigate>;
  return children;
};

export const UserRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login"></Navigate>;
  return children;
};
