import React from 'react';
import Table from 'react-bootstrap/Table';

export const TableWithPlant = () => {

  


  return (
    <Table striped bordered hover style={{marginTop:"40px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Nazwa rośliny</th>
          <th>Cena</th>
          <th>Wysokość</th>
          <th>Komentarz</th>
          <th>Kupujący</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Komentarz</td>
          <td>Kupujący</td>
        </tr>
      </tbody>
    </Table>

  )
};
