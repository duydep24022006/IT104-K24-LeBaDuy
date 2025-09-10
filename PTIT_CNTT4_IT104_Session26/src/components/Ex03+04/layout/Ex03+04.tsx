import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

export default function Ex03V04() {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  );
}
