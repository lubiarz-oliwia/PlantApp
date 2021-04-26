import React from 'react';
import Table from 'react-bootstrap/Table';

export const TableWithPlant = ({boughtPlants}) => {

  return (
    <Table striped bordered hover style={{marginTop:"40px"}}>
      <thead>
        <tr>
          <th>Nazwa rośliny</th>
          <th>Cena</th>
          <th>Wysokość</th>
          <th>Sprzedawca</th>
        </tr>
      </thead>
      <tbody>
        {boughtPlants.map((item) => 
        <tr>
          <td>{item.plantName}</td>
          <td>{item.price}</td>
          <td>{item.height}</td>
          <td>{item.userId}</td>
        </tr>
        )}
      </tbody>
    </Table>

  )
};
