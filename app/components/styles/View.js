import styled, { css } from 'styled-components';

const containerStyle = css`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const linkingStyle = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.l1,
  })}
`;

const View = styled.View`
  ${({ container }) => container && containerStyle}
  ${({ linking }) => linking && linkingStyle}
`;

export default View;
