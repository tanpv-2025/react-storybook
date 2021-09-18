import React from 'react';

import { Image } from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  alt: 'image',
  width: 200,
  height: 200,
};
