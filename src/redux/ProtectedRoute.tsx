// ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

export default function ProtectedRoute() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // صفحات داخلی این Outlet رندر میشن
}


