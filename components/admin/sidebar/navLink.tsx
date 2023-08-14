import NextLink from "next/link";

export default function NavLink() {
  return (
    <li className="nav-item">
      <NextLink className="nav-link" href="/admin">
        <i className="icon-grid menu-icon"></i>
        <span className="menu-title">Dashboard</span>
      </NextLink>
    </li>
  );
}
