import NextLink from "next/link";

export default function DropdownLinkItem({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <li className="nav-item">
      <NextLink className="nav-link" href={href}>
        {title}
      </NextLink>
    </li>
  );
}
