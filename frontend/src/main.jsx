// index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useAuth, AuthProvider } from "./contexts/AuthProvider.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";
import Layout from "./Layout.jsx";
import Home from "./App.jsx";
import BooksList from "./Pages/BooksList/BooksList.jsx";
import Signup from "./Pages/authentication/signup.jsx";
import Signin from "./Pages/authentication/signin.jsx";
import Profile from "./Pages/authentication/profile.jsx";
import AddBook from "./Pages/BooksList/addBook.jsx";

// A little wrapper to redirect signed-in users away from signin/signup
function PublicRoute({ children }) {
  const { user } = useAuth();
  return user ? <Navigate to="/" replace /> : children;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/** Public only */}
      <Route
        path="signin"
        element={
          <PublicRoute>
            <Signin />
          </PublicRoute>
        }
      />
      <Route
        path="signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      {/** Protected only */}
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="booksList"
        element={
          <ProtectedRoute>
            <BooksList />
          </ProtectedRoute>
        }
      />
      <Route
        path="addBook"
        element={
          <ProtectedRoute>
            <AddBook />
          </ProtectedRoute>
        }
      />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/** Fallback for any other URL */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
