import React from 'react';

import { DetailPage } from './DetailPage';
import * as InformationStories from '../../templates/Information/Information.stories';
import { Image } from '../../atoms/Image/Image';

export default {
  title: 'Pages/DetailPage',
  component: DetailPage,
};

const Template = (args) => <DetailPage {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  ...InformationStories.DefaultState.args,
  leftContent: <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={250} height={250} />,
  rightContent: (
    <p>
      Id veniam Lorem do officia elit do eiusmod exercitation laboris magna.
      Tempor irure veniam tempor velit ea. Proident nulla laborum fugiat veniam irure excepteur.
      Incididunt elit eiusmod incididunt exercitation occaecat adipisicing consequat eiusmod eu sit et nisi incididunt.
      Nulla tempor dolor ex veniam eu minim et Lorem deserunt aute.
    </p>
  ),
};
