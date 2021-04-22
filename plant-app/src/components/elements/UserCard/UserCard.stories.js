import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {UserCard} from "./UserCard";

export default {
    title: 'Example/UserCard',
    component: UserCard,
  };

  const Template = (args) => <UserCard {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
  
  };
  