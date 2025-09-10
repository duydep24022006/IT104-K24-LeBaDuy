import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Router'

export default function Ex07() {
  return (
   <RouterProvider router={routes} />
  )
}
