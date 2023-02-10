import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { SignIn } from '@/pages/Signin/ui'

export function Routes() {
  return (
    <Switch>
      <Route element="/login" index />
    </Switch>
  )
}
