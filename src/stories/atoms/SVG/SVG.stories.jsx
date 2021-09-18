import React from 'react';
import { SVG } from './SVG';
import StoryLoGo from '../../assets/story-logo.svg';

export default {
  title: 'Atoms/SVG',
  component: SVG,
};

const Template = (args) => <SVG {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  src: StoryLoGo,
};
