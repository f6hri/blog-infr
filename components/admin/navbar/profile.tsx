export default function Profile() {
  return (
    <li className="nav-item nav-profile dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        data-toggle="dropdown"
        id="profileDropdown"
      >
        <img src="images/faces/face28.jpg" alt="profile" />
      </a>
      <div
        className="dropdown-menu dropdown-menu-right navbar-dropdown"
        aria-labelledby="profileDropdown"
      >
        <a className="dropdown-item">
          <i className="ti-settings text-primary"></i>
          Settings
        </a>
        <a className="dropdown-item">
          <i className="ti-power-off text-primary"></i>
          Logout
        </a>
      </div>
    </li>
  );
}
