import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeacherForm from './pages/TeacherForm';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Landing} />
    <Route exact path="/study" component={TeachersList} />
    <Route exact path="/give-classes" component={TeacherForm} />
  </Router>
);

export default Routes;
