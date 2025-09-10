import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export default function Teams() {
    return (
      <div>
        <h2>Teams Page</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="1">Team 1</NavLink>
            </li>
            <li>
              <NavLink to="2">Team 2</NavLink>
            </li>
            <li>
              <NavLink to="3">Team 3</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
}
