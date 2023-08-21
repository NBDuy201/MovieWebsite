import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { authRoutes, movieRoutes } from "./routes/page-routes";

function listRoutes(routes) {
  return routes.map((route) => {
    const Layout = route.layout;
    const Page = route.component;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    );
  });
}

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<></>}>
        <Routes>
          {/* Movie routes */}
          {listRoutes(movieRoutes)}

          {/* Authen routes */}
          {listRoutes(authRoutes)}
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
