"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const activeProps = { className: "contrast" };
  const inactiveProps = { className: "secondary outline" };
  return(
    <nav>
      <ul>
        <li>
          <Link role="button" href="/tickets" {...(pathname === "/tickets" ? activeProps : inactiveProps)}>Ticket List</Link>
        </li>
        <li>
          <Link role="button" href="/tickets/new" {...(pathname === "/tickets/new" ? activeProps : inactiveProps)}>New Ticket</Link>
        </li>
        <li>
          <Link role="button" href="/tickets/users" {...(pathname === "/tickets/users" ? activeProps : inactiveProps)}>User List</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            role="button"
            href="/tickets/logout"
            className="secondary">
              Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}