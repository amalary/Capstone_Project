import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Post from '../Components/post/Post'

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/games' component={ postList } />
  </Switch>
)