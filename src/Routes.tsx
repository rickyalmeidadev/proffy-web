import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeacherForm from './pages/TeacherForm';

const Routes: React.FC = () => (
  <Router>
    <Route exact path="/" component={Landing} />
    <Route exact path="/estudar" component={TeachersList} />
    <Route exact path="/dar-aulas" component={TeacherForm} />
  </Router>
);

export default Routes;
