import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { SignIn } from '@/pages/Signin/ui'
import { Error404 } from '@/pages/Error404/ui'

export function Routes() {
  return (
    <Switch>
      <Route path="*" element={<Error404 />} />
      <Route element={<SignIn />} index />
    </Switch>
  )
}
