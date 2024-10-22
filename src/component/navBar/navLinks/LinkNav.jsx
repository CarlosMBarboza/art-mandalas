import { NavLink } from "react-router-dom";
import { navLinks } from "../../../db/NavOptions.js";

const LinkNav = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="container-xl mt-5">
        <nav className="d-flex justify-content-around">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className={`mx-2 ${link.subLinks ? "nav-item" : ""}`}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-warning text-decoration-none text-uppercase fw-bold"
                    : "text-white text-decoration-none text-uppercase fw-bold"
                }
              >
                {link.name}
              </NavLink>

              {link.subLinks && (
                <div className="dropdown">
                  {link.subLinks.map((subLink) => (
                    <NavLink
                      key={subLink.name}
                      to={subLink.path}
                      className="d-block text-white text-decoration-none"
                    >
                      {subLink.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LinkNav;
