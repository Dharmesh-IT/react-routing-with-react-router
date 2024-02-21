import { NavLink, Outlet } from "react-router-dom";

export function Customer() {
  return (
    <div>
      <h2>Customer main</h2>
      <nav>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="history">History</NavLink>
        <NavLink to="task">Task</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
