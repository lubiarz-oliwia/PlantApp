import React from 'react';
import { BoughtPage } from './BoughtPage';

export default {
    title: 'Example/BoughtPage',
    component: BoughtPage,
  };

  const Template = (args) => <BoughtPage {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
  };
  