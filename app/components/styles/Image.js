import styled, { css } from 'styled-components';

import { calender } from '../../constants';

const { BG_HEIGHT } = calender;

const bgStyle = css`
  width: 100%;
  height: ${BG_HEIGHT}px;
`;

const headerStyle = css`
  width: 178px;
  height: 32px;

  ${({ theme: { space } }) => ({
    marginTop: space.xl2,
    marginBottom: space.l1,
  })}
`;

const logoStyle = css`
  height: 18px;
  width: 18px;
`;

const vector1Style = css`
  width: 38%;
  height: 100%;
`;

const vector2Style = css`
  width: 36%;
  height: 100%;
  top: -3px;
`;

const vector3Style = css`
  width: 145px;
  height: 180px;

  ${({ theme: { space } }) => ({
    marginTop: -space.l1,
    resizeMode: 'cover',
  })}
`;

const vector4Style = css`
  width: 140px;
  height: 170px;

  ${({ theme: { space } }) => ({
    marginTop: -space.s1,
    resizeMode: 'cover',
  })}
`;

const pictureStyle = css`
  width: 340px;
  height: 280px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  ${{ resizeMode: 'contain' }}

  ${({ header }) => header && headerStyle}
  ${({ bg }) => bg && bgStyle}
  ${({ logo }) => logo && logoStyle}
  ${({ picture }) => picture && pictureStyle}
  ${({ vector1 }) => vector1 && vector1Style}
  ${({ vector2 }) => vector2 && vector2Style}
  ${({ vector3 }) => vector3 && vector3Style}
  ${({ vector4 }) => vector4 && vector4Style}
`;

export default Image;
