interface DropdownProps {
  id: string;
  colorScheme?: string;
  size?:string;
  title: string;
  children: React.ReactNode;
}

export function Dropdown({ id, colorScheme="primary",size="md", title, children }: DropdownProps) {
  return (
    <div className="dropdown">
      <button
        className={`btn btn-${colorScheme} btn-${size} dropdown-toggle`}
        type="button"
        id={id}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {title}
      </button>
      <div className="dropdown-menu" aria-labelledby={id}>
        {children}
      </div>
    </div>
  );
}
