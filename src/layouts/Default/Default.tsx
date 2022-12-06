import React from "react";
import {Outlet} from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

const Default = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Default;