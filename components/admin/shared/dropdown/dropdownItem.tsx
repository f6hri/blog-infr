import NextLink from "next/link";

interface DropdownItemProps {
  href: string;
  title: string;
}

export function DropdownItem({ href, title }: DropdownItemProps) {
  return (
    <NextLink className="dropdown-item" href={href}>
      {title}
    </NextLink>
  );
}
