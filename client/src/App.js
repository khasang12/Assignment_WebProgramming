import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { adminRoutes } from "./routes";
import { AdminLayout } from "./layouts/AdminLayout/Navbar";

function App() {
  const [navbarAdmin, setNavbarAdmin] = useState(false);
  //temporary homepage
  let AdminPage = adminRoutes[0].component;
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div>
              <AdminLayout setNavbarAdmin={setNavbarAdmin}/>
              <AdminPage navbarAdmin={navbarAdmin}/>
            </div>
          }
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
