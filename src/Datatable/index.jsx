import React from "./react";
import { CardColumns } from "react-bootstrap";

const columns = data[0] && Object.keys(data[0]);

export default function Datatable({ data }) {
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && CardColumns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((columns) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
