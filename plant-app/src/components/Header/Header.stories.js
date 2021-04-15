import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Header} from "./Header";

export default {
    title: 'Example/Header',
    component: Header,
  };

  const Template = (args) => <Header {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    buttonText: "buy/sell",
  };
  