import styled, { css } from 'styled-components';

const containerStyle = css`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const View = styled.View`
  ${({ container }) => container && containerStyle}
`;

export default View;
