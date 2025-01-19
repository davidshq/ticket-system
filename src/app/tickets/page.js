import { TicketList } from "./TicketList";

export default function TicketListPage() {
  const dummyTickets = [
    {
      id: 1,
      title: "Write Supabase Book",
      status: "Not started",
      author: "Chayan",
    },
    {
      id: 2,
      title: "Read more Packt Books",
      status: "In progress",
      author: "David",
    },
    {
      id: 3,
      title: "Make videos for the YouTube Channel",
      status: "Done",
      author: "David",
    },
  ];
  return (
    <div>
      <h1>Ticket List</h1>
      <TicketList tickets={dummyTickets} />
    </div>
  );
}