import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {CarouselSec} from "./CarouselSec";

export default {
    title: 'Example/CarouselSec',
    component: CarouselSec,
  };

  const Template = (args) => <CarouselSec {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    
  };
  