import { useState } from "react";
import { handleScroll } from "../../../../untils/scroll";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("about");

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    handleScroll(e, id);
    setActiveLink(id); // chỉ đổi active khi click
  };

  // Mảng nav với icon <i> theo thứ tự nav
  const navItems: { id: string; label: string; iconClass: string }[] = [
    { id: "about", label: "About", iconClass: "fas fa-user me-2" },
    { id: "project", label: "Projects", iconClass: "fas fa-project-diagram me-2" },
    { id: "skill", label: "Skill", iconClass: "fas fa-laptop-code me-2" },
    { id: "education", label: "Education", iconClass: "fas fa-graduation-cap me-2" },
    { id: "contact", label: "Contact", iconClass: "fas fa-envelope me-2" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ position: "fixed", top: 0, right: 0, left: 0, zIndex: 1 }}
    >
      <div className="container">
        <div className="left-header">
          <div className="header-name">
            <a className="navbar-brand fw-bold fs-1 text-warning" href="/">
              Y NHÊN ADRONG
            </a>
          </div>
          <div className="header-role">
            <a className="navbar-brand text-info" href="/">
              Full Stack Developer
            </a>
          </div>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {navItems.map(({ id, label, iconClass }) => (
              <li key={id} className="nav-item fw-bold mx-3 px-1">
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`nav-link fw-bold px-3 py-2 rounded ${
                    activeLink === id
                      ? "active bg-warning text-dark"
                      : "text-warning"
                  }`}
                >
                  <i className={iconClass}></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
