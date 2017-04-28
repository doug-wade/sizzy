import React from "react";
import { Route } from "mobx-router";

//components
import Home from "views/Home";

const views = {
  home: new Route({
    id: "home",
    path: "/",
    component: <Home />,
    onEnter: (route, params, store, queryParams) => {
      let hasInitUrl = queryParams.initurl && queryParams.initurl.trim() !== "";
      store.app.setUrl(hasInitUrl ? queryParams.initurl : "http://kitze.io");
    }
  })
};

export default views;
