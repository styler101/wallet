import React from 'react'
import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import { SignIn } from '@/pages/Signin/ui'
import { SignUp } from '@/pages/SignUp/ui'
import { Error404 } from '@/pages/Error404/ui'

export function Routes() {
  return (
    <Switch>
      <Route path="/404" element={<Error404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route element={<SignIn />} index />
      <Route path="/signup" element={<SignUp />} />
    </Switch>
  )
}
