'use client';
import { useRef } from "react";

const comments = [
  {
    id: 1,
    author: "Dave",
    date: "2027-01-01",
    content: "This is a comment from Dave",
  },
  {
    id: 2,
    author: "Alice",
    date: "2027-01-02",
    content: "This is a comment from Alice",
  },
];

export function TicketComments() {
  const commentRef = useRef(null);
  return (
    <footer>
      <h3>Comments</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("TODO: Add comment");
          }}
          >
            <textarea ref={commentRef} placeholder="Add a comment" />
            <button type="submit">Add comment</button>
          </form>
          <section>
            {comments.map((comment) => (
              <article key={comment.id}>
                <strong>{comment.author}</strong>&nbsp;
                <time>{comment.date}</time>
                <p>{comment.content}</p>
              </article>
            ))}
          </section>
    </footer>
  );
}