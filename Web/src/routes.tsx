import React from 'react';

import Login from './pages/Login';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/landing" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
