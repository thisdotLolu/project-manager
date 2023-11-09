import './App.css'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Project from './pages/project/Project';
import Create from './pages/create/Create';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <div className='container'>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Dashboard/>
          </Route>
          <Route path = '/create'>
            <Create/>
          </Route>
          <Route path='/projects/:id'>
            <Project/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App
