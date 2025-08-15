import{useState, useEffect} from "react";



export default function GuestList({ guests, selectedId, onSelect }) {
    return (
      <table className="guest-table">
        <thead className="heading">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((g) => (
            <tr
              key={g.id}
              onClick={() => onSelect(g.id)}
              className={
                selectedId === g.id ? "selected highlight" : ""
              }
            >
              <td>{g.name}</td>
              <td>{g.email}</td>
              <td>{g.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  