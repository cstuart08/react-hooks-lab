import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokemon from './components/Pokemon'
import PokeList from './components/PokeList'

export default (
  <Switch>
    <Route exact path="/" component={PokeList} />
    <Route path="/pokemon/:name" component={Pokemon} />
  </Switch>
)