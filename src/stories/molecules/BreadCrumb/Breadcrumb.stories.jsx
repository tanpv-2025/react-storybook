import React from 'react';

import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
};

const Template = (args) => <Breadcrumb {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  routes: [
    {
      label: 'Menu 1',
    },
    {
      label: 'Menu 2',
      path: '/menu2',
    },
    {
      label: 'Menu 3',
      path: '/menu3',
    },
    {
      label: 'Menu 4',
    },
  ],
  separator: '/',
  className: '',
};

export const ArrowSeparator = Template.bind({});
ArrowSeparator.args = {
  ...DefaultState.args,
  separator: '>',
};
