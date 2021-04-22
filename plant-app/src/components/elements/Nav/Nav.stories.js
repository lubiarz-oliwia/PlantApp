import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Nav} from "./Nav";

export default {
    title: 'Example/Nav',
    component: Nav,
  };

  const Template = (args) => <Nav {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
  
  };
  