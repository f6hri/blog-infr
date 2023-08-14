import DropdownLink from "./dropdownLink";
import DropdownLinkItem from "./dropdownLinkItem";
import NavLink from "./navLink";

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <NavLink />
        <DropdownLink title="hellü">
          <DropdownLinkItem title="hellü1" href="/" />
        </DropdownLink>
      </ul>
    </nav>
  );
}
