import React from 'react';

import { Input } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  disabled: false,
  placeholder: '',
  value: '',
  onChange: undefined,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...DefaultState.args,
  placeholder: 'placeholder',
};

export const Disable = Template.bind({});
Disable.args = {
  ...DefaultState.args,
  value: 'Disabled',
  disabled: true,
};
