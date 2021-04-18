import React from 'react';

import {UserPage} from "./UserPage";

export default {
    title: 'Example/UserPage',
    component: UserPage,
  };

  const Template = (args) => <UserPage {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
  };
  