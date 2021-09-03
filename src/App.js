import {AuthProvider} from './contexts/authContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Profile from './components/Profile';
import Movies from './components/Movies';
import { ThemeProvider } from './contexts/themeContext';



import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Switch>
          <PrivateRoute exact path="/" component={ Dashboard }/>
          <PrivateRoute exact path="/profile" component={ Profile }/>
          <PrivateRoute exact path="/update-profile" component={ UpdateProfile }/>
            <Route path="/signup" component={ Signup } />
            <Route path="/login" component={ Login } /> 
            <Route path="/forgot-password" component={ ForgotPassword } />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
