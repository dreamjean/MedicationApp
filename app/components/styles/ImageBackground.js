import styled, { css } from 'styled-components';

import { calender } from '../../constants';

const { BG_HEIGHT } = calender;

const headingStyle = css`
  width: 100%;
  top: -45px;
  height: ${BG_HEIGHT}px;
  align-items: center;
`;

const ImageBackground = styled.ImageBackground`
  ${({ heading }) => heading && headingStyle}
`;

export default ImageBackground;
