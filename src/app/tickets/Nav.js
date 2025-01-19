import Link from "next/link";
export default function Nav() {
  return(
    <nav>
      <ul>
        <li>
          <Link role="button" href="/tickets">Ticket List</Link>
        </li>
        <li>
          <Link role="button" href="/tickets/new">New Ticket</Link>
        </li>
        <li>
          <Link role="button" href="/tickets/users">User List</Link>
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