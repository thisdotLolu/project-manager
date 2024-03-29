import './App.css'
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Project from './pages/project/Project';
import Create from './pages/create/Create';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
import OnlineUsers from './components/OnlineUsers';



function App() {
  const {user,authIsReady} = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        {user && <Sidebar/>}
        <div className='container'>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
            {!user && <Redirect to ='/login'/>}
              {user && <Dashboard/>}
            </Route>
            <Route path='/create'>
            {!user && <Redirect to ='/login'/>}
              {user && <Create/>}
            </Route>
            <Route path='/projects/:id'>
            {!user && <Redirect to ='/login'/>}
              {user && <Project/>}
            </Route>
            <Route path='/login'>
              {user && <Redirect to='/'/>}
              {!user && <Login/>}
            </Route>
            <Route path='/signup'>
            {user && <Redirect to='/'/>}
            {!user && <SignUp/>}
            </Route>
          </Switch>
        </div>
        {user && <OnlineUsers/>}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
