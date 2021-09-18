import React from 'react';

import { TextLabel } from './TextLabel';

export default {
  title: 'Atoms/TextLabel',
  component: TextLabel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TextLabel {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  label: 'Text Label',
  primary: false,
  className: '',
};

export const Primary = Template.bind({});
Primary.args = {
  ...DefaultState.args,
  primary: true,
};
