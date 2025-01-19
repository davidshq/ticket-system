import classes from "./TicketDetails.module.css";
import { TicketComments } from "./TicketComments";

export default async function TicketDetailsPage({ params }) {
  const ticketParams = await params;
  const id = ticketParams.id;

  return (
    <article className={classes.ticketDetails}>
      <header>
        <strong>#{id}</strong> - <strong className={classes.ticketStatusGreen}>Open</strong>
        <br />
        <small className={classes.AuthorDate}>
          Created by <strong>AuthorName</strong> at{" "} <time>December 10th 2025</time> 
        </small>
        <h2>Ticket title should be here</h2>
      </header>
      <section>
        Some details about the ticket should be here.
      </section>
      <TicketComments />
    </article>
  );
}