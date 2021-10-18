
import './App.css';
import SignIn from './pages/Account/SignIn';
import Header from './pages/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Home from './pages/Home/Home';
import PrivateRoute from './pages/PrivateRouter/PrivateRouter';
import Doctors from './pages/Doctors/Doctors';
import Tests from './pages/Tests/Tests';
import Packages from './pages/Packages/Packages';
import SignUp from './pages/Account/SignUp';

function App() {
  return (
    <div className=''>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route  path='/signIn'>
              <SignIn />
            </Route>
            <Route  path='/signUp'>
              <SignUp />
            </Route>
            <PrivateRoute path='/doctors'>
              <Doctors />
            </PrivateRoute>
            <PrivateRoute path='/tests'>
              <Tests />
            </PrivateRoute>
            <PrivateRoute path='/packages'>
              <Packages />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
     
      
    </div>
  );
}

export default App;
