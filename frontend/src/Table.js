import React from "react";

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={props.characterData}
        removeCharacter={props.removeCharacter}
      />
    </table>
  );
}
function TableHeader() {
  return (
    <thead>
      <tr>
        <th>ID </th>
        <th>Name</th>
        <th>Password</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}
function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row._id}</td>
        <td>{row.name}</td>
        <td>{row.password}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

export default Table;