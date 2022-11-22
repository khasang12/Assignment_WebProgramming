import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { adminRoutes } from "./routes";
import { AdminLayout } from "./layouts/AdminLayout/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  const [navbarAdmin, setNavbarAdmin] = useState(false);
  
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Homepage/>}
        />

        {adminRoutes.map((route, index) => {
          let Page = route.component;
          return (
            <Route
              path={route.path}
              element={
                <div>
                  <AdminLayout setNavbarAdmin={setNavbarAdmin}/>
                  <Page navbarAdmin={navbarAdmin}/>
                </div>
              }
              key={index}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
