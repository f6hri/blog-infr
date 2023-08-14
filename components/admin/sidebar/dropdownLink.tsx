export default function DropdownLink({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        data-toggle="collapse"
        href="#ui-basic"
        aria-expanded="false"
        aria-controls="ui-basic"
      >
        <i className="icon-layout menu-icon"></i>
        <span className="menu-title">{title}</span>
        <i className="menu-arrow"></i>
      </a>
      <div className="collapse" id="ui-basic">
        <ul className="nav flex-column sub-menu">{children}</ul>
      </div>
    </li>
  );
}
