import React from 'react';
import {Route} from 'mobx-router';

//components
import Home from 'views/Home';

const views = {
  home: new Route({
    id: 'home',
    path: '/',
    component: <Home/>
  })
};

export default views;