import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import useAuth from "./auth/useAuth";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import SignInForm from "./pages/SignInForm";

export default function App() {
  const { isLoading, user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isAuthed={!!user}
              isLoading={isLoading}
              element={<Profile />}
            />
          }
        />
      </Routes>
    </Router>
  );
}
