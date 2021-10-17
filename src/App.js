
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

function App() {
  return (
    <div className=''>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/home'>
              <Home/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
     
      
    </div>
  );
}

export default App;
