import {Route, Routes} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import {ThemeProvider} from "../../contexts/ThemeContext";
import {BrowserRouter} from "react-router-dom";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Default from "../../layouts/Default/Default";

const Home = lazy(() => import('../../pages/Home/Home'));
const Projects = lazy(() => import('../../pages/Projects/Projects'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Home />
                </Suspense>
              }
            />
          </Route>

          <Route path="/projects" element={<Default />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Projects />
                </Suspense>
              }
            />
          </Route>

          {/* NOT FOUND catch all */}
          <Route path="*" element={<Default />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;