import React from 'react';

import { Information } from './Information';
import * as HeaderStories from '../../organisms/Header/Header.stories';

export default {
  title: 'Templates/Information',
  component: Information,
};

const Template = (args) => <Information {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  leftContent: 'Left content',
  rightContent: 'Right content',
  ...HeaderStories.LoggedIn.args,
};

