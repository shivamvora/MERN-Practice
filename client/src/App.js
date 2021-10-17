import React, { createContext, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.css'
import Logout from './components/Logout'
import { initialState, reducer } from './reducer/useReducer'

export const UserContext = createContext();
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/logout" component={Logout} />
      <Route component={ErrorPage} />
    </Switch>
  )
}

const App = () => {
  const [state, dispatch] = useReducer( reducer, initialState )
  console.log( "what is state in APP js file", state )
  console.log( "state inside apppp", state );
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>

      {/* 
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route>
        <ErrorPage />
      </Route> */}

    </>
  )
}

export default App
