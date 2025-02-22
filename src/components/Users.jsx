import React from "react";
const users = [
  {
    name: "John Doe",
    role: "Admin",
    userName: "john_doe",
    userId: 1,
    city: "New York",
  },
  {
    name: "Jane Smith",
    role: "Editor",
    userName: "jane_smith",
    userId: 2,
    city: "Los Angeles",
  },
  {
    name: "Alice Johnson",
    role: "Viewer",
    userName: "alice_johnson",
    userId: 3,
    city: 0,
  },
  {
    name: "Bob Brown",
    role: "Admin",
    userName: "bob_brown",
    userId: 4,
    city: null,
  },
];
const Users = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {users.map((user) => user.city).filter(Boolean)}
    </div>
  );
};

export default Users;
// [1, 3, 5, 7, 9].map(parseInt)
// [1, 3, 5, 7, 9].map((num,index,arr) => num,index,arr,this).Boolean(num,index,arr)
// parseInt
// ["a","b","c",null].filter()