import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const Home = lazy(() => import('./pages/Home/Home'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <Navigation />

      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path='/projects'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
          }
        />

        {/* NOT FOUND catch all */}
        <Route
          path='*'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
