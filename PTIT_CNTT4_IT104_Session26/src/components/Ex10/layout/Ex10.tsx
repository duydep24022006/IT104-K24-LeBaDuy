import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from '../Router'

export default function Ex10() {
  return (
   <RouterProvider router={routes} />
  )
}
