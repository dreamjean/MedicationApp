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

const inputBoxStyle = css`
  flex-direction: row;
  align-items: center;

  ${({ touched, error, theme: { colors, radii, space } }) => ({
    backgroundColor: !touched ? colors.light : error ? colors.lightDanger : colors.bg,
    borderRadius: radii.s2,
    paddingVertical: space.m1,
    paddingHorizontal: space.m2,
    marginVertical: space.s2,
  })}
`;

const View = styled.View`
  ${({ container }) => container && containerStyle}
  ${({ linking }) => linking && linkingStyle}
  ${({ inputBox }) => inputBox && inputBoxStyle}
`;

export default View;
