import React from 'react';

import { GroupSearch } from './GroupSearch';

export default {
  title: 'Molecules/GroupSearch',
  component: GroupSearch,
};

const Template = (args) => <GroupSearch {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  placeholder: 'Input to search',
  value: '',
  buttonLabel: 'Search',
  onSearch: () => {},
  onChange: () => {},
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...DefaultState.args,
  value: 'Search value',
};
