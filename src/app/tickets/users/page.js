import { IconUserCheck, IconUserOff } from "@tabler/icons-react";
const users = [
  {
    name: "Alice Ling",
    job: "Software Engineer",
    isAvailable: false,
  },
  // ... add as much users as you want
];
export default function UserList() {
  return (
    <table>
     <thead>
      <tr>
       <th>Name</th>
       <th>Job</th>
      </tr>
     </thead>
     <tbody>
      {users.map((user) => (
       <tr key={user.name}>
        <td style={{ color: !user.isAvailable ? "red" : undefined }}>
          {user.isAvailable ? <IconUserCheck /> : <IconUserOff />} {user.name}
        </td>
        <td>{user.job}</td>
       </tr>
      ))}
     </tbody>
    </table>
   );
}