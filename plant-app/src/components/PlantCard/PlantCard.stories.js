import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {PlantCard} from "./PlantCard";

export default {
    title: 'Example/PlantCard',
    component: PlantCard,
  };

  const Template = (args) => <PlantCard {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
  
  };
  