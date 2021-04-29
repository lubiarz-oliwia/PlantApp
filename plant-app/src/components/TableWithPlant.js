import React from 'react';
import Table from 'react-bootstrap/Table';

export const TableWithPlant = ({ plants, title }) => (
  <Table striped bordered hover style={{ marginTop: "40px" }}>
    <thead>
      <tr>
        <th>Nazwa rośliny</th>
        <th>Cena</th>
        <th>Wysokość</th>
        <th>{title}</th>
      </tr>
    </thead>
    <tbody>
      {plants.map((item) =>
        <tr>
          <td>{item.plantName}</td>
          <td>{item.price} zł</td>
          <td>{item.height} cm</td>
          <td>{item.userId || item.buyer}</td>
        </tr>
      )}
    </tbody>
  </Table>
)

