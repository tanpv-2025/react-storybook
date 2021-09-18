import React from 'react';

import { MenuItem } from './MenuItem';

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
};

const Template = (args) => <MenuItem {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  className: '',
  path: 'path',
  label: 'label',
  isSelected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  ...DefaultState.args,
  isSelected: true,
};

