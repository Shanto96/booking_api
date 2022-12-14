import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewHotel from "./pages/NewHotel/NewHotel";
import NewRoom from "./pages/NewRoom/NewRoom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { userColumns, hotelColumns, roomColumns } from "./datatablesource.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login"></Navigate>;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home column={userColumns} />
                </ProtectedRoute>
              }
            />
            <Route path="user">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List column={userColumns} title="User" />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotel">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List column={hotelColumns} title="Hotel" />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel inputs={productInputs} title="Add New Hotel" />
                  </ProtectedRoute>
                }
              />
            </Route>{" "}
            <Route path="room">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List column={roomColumns} title="Room" />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom inputs={productInputs} title="Add New Room" />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
