import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeacherForm from './pages/TeacherForm';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/estudar" component={TeachersList} />
      <Route path="/dar-aulas" component={TeacherForm} />
    </Switch>
  </Router>
);

export default Routes;
