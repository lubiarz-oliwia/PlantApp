import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddPage } from './AddPage';

export default {
  title: 'Example/AddForm',
  component: AddPage,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <AddPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
