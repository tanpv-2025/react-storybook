import React from 'react';

import StoryLoGo from '../../assets/story-logo.svg';
import { SVG } from '../../atoms/SVG/SVG';
import './footer.css';

export const Footer = () => (
  <footer>
    <div className="footer">
      <SVG src={StoryLoGo} width={32} height={32} />
      <span className="copy-right">Storybook App ©2021 Created by TanPV</span>
    </div>
  </footer>
);
