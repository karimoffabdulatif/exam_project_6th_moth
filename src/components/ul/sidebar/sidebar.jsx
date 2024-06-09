import { NavLink } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/main/todos" className="navlink">
        Todos
        <i className="fa-solid fa-users-gear"></i>
      </NavLink>
    </div>
  );
};

export default Sidebar;
