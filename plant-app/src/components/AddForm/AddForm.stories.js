import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddForm } from './AddForm';

export default {
  title: 'Example/AddForm',
  component: AddForm,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <AddForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
