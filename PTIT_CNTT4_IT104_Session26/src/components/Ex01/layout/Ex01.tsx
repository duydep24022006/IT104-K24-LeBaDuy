import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

export default function Ex01() {
  return (
      <RouterProvider router={routes} />
  );
}
