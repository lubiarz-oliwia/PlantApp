import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {TableWithPlant} from "./Table";

export default {
    title: 'Example/TableWithPlant',
    component: TableWithPlant,
  };

  const Template = (args) => <TableWithPlant {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
  
  };
  