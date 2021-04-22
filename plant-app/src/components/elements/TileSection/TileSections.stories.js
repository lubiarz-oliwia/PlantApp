import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {TileSection} from "./TileSection";

export default {
    title: 'Example/TileSection',
    component: TileSection,
  };

  const Template = (args) => <TileSection {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    header: 'Buy or Sell',
    buttonText: "buy/sell",
    data: [
        {
            title: 't1',
            description: 'd2',
            iconName: '',
        },
        {
            title: 't2',
            description: 'd2',
            iconName: '',
        },
        {
            title: 't3',
            description: 'd3',
            iconName: '',
        },
    ],
  };
  