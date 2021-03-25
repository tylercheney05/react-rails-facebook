import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/shared/Home'
import Settings from './components/shared/Settings'
import NoMatch from './components/shared/NoMatch'
import Navbar from './components/shared/Navbar'
import Profiles from './components/profiles/Profiles'

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/profiles" component={Profiles}/>
        <Route component={NoMatch}/>
      </Switch>
    </>
  )
}

export default App