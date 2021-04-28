import React from 'react';
import Table from 'react-bootstrap/Table';

export const TableWithPlant = ({ plants, title }) => {


  return (
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
            <td>{item.price}</td>
            <td>{item.height}</td>
            <td>{item.userId || item.buyer}</td>
          </tr>
        )}
      </tbody>
    </Table>

  )
};
