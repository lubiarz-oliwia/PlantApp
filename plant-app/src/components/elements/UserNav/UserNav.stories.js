import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {UserNav} from "./UserNav";

export default {
    title: 'Example/UserNav',
    component: UserNav,
  };

  const Template = (args) => <UserNav {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
  
  };
  