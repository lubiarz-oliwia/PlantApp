import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { ButtonComponent } from './Button';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Sell = Template.bind({});
Sell.args = {
  children: 'Button',
  className: "sellButton"
};
