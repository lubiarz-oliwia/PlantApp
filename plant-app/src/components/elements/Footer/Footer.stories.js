import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Footer} from "./Footer";

export default {
    title: 'Example/Footer',
    component: Footer,
  };

  const Template = (args) => <Footer {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    title: 'title',
    description: "description",
    iconName: "iconName",
    style: "colorStyle",
  };
  