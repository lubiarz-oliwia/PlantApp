import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Tile} from "./Tile";

export default {
    title: 'Example/Tile',
    component: Tile,
  };

  const Template = (args) => <Tile {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    title: 'title',
    description: "description",
    iconName: "iconName",
    style: "colorStyle",
  };
  