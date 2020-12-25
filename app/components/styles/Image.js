import styled, { css } from 'styled-components';

import { calender } from '../../constants';

const { BG_HEIGHT, width } = calender;

const bgStyle = css`
  width: 100%;
  height: ${BG_HEIGHT}px;
`;

const headerStyle = css`
  width: 178px;
  height: 32px;

  ${({ white, theme: { space } }) => ({
    marginTop: white ? space.l2 : space.xl2,
    marginBottom: space.l1,
  })}
`;

const cloud1Style = css`
  width: 55px;
  height: 30px;
`;

const cloud2Style = css`
  width: 100px;
  height: 55px;
`;

const dot1Style = css`
  width: 8px;
  height: 8px;

  ${({ theme: { space } }) => ({
    marginLeft: space.l2,
    marginBottom: space.s1,
  })}
`;

const dot2Style = css`
  width: 14px;
  height: 14px;

  ${({ theme: { space } }) => ({
    marginLeft: space.l3,
    marginBottom: space.s2,
  })}
`;

const logoStyle = css`
  height: 18px;
  width: 18px;
`;

const picture1Style = css`
  width: 320px;
  height: 270px;
`;

const picture2Style = css`
  width: ${width}px;
  height: 260px;
  ${{ resizeMode: 'cover' }}
`;

const Image = styled.Image`
  ${{ resizeMode: 'contain' }}

  ${({ bg }) => bg && bgStyle}
  ${({ cloud1 }) => cloud1 && cloud1Style}
  ${({ cloud2 }) => cloud2 && cloud2Style}
  ${({ dot1 }) => dot1 && dot1Style}
  ${({ dot2 }) => dot2 && dot2Style}
  ${({ header }) => header && headerStyle}
  ${({ logo }) => logo && logoStyle}
  ${({ picture1 }) => picture1 && picture1Style}
  ${({ picture2 }) => picture2 && picture2Style}
`;

export default Image;
