import React from 'react';

import { Menu } from './Menu';

export default {
  title: 'Molecules/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  paths: [
    {
      label: 'Menu 1',
      path: '/menu1',
    },
    {
      label: 'Menu 2',
      path: '/menu2',
    },
    {
      label: 'Menu 3',
      path: '/menu3',
    }
  ],
  mode: 'horizontal',
  className: '',
};

export const VerticalMode = Template.bind({});
VerticalMode.args = {
  ...DefaultState.args,
  mode: 'vertical',
};
