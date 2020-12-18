import styled, { css } from 'styled-components';

const heading1Style = css`
  ${({ theme: { colors, size, getFont } }) => ({
    color: colors.heading,
    fontFamily: getFont(0),
    fontSize: size.heading1,
  })};
`;

const heading2Style = css`
  line-height: 40px;

  ${({ theme: { colors, size, getFont } }) => ({
    color: colors.heading,
    fontFamily: getFont(0),
    fontSize: size.heading2,
  })};
`;

const title1Style = css`
  ${({ theme: { size, getFont } }) => ({
    fontFamily: getFont(1),
    fontSize: size.title1,
  })};
`;

const title2Style = css`
  ${({ theme: { size, getFont } }) => ({
    fontFamily: getFont(1),
    fontSize: size.title2,
  })};
`;

const body1Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(2),
    fontSize: size.body1,
  })};
`;
const body2Style = css`
  line-height: 26px;

  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(2),
    fontSize: size.body2,
  })};
`;
const body3Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(2),
    fontSize: size.body3,
  })};
`;

const buttonStyle = css`
  text-align: center;
  text-transform: uppercase;
  ${({ primary, dark, theme: { colors, getFont, size } }) => ({
    color: primary ? colors.white : dark ? colors.darkBg : colors.gray,
    fontFamily: getFont(1),
    fontSize: size.body1,
  })};
`;

const caption1Style = css`
  line-height: 24px;
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.s1,
  })}
`;

const caption2Style = css`
  line-height: 24px;
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(2),
    fontSize: size.s2,
  })}
`;

const centerStyle = css`
  text-align: center;
`;

const rightStyle = css`
  text-align: flex-end;
`;

const Text = styled.Text`
  ${({ upper, marginTop, marginBottom, opacity, primary, dark, theme: { colors } }) => ({
    color: primary ? colors.primary : dark ? colors.darkBg : colors.grey,
    marginTop,
    marginBottom,
    textTransform: upper ? 'uppercase' : 'none',
    opacity,
  })}
  ${({ body1 }) => body1 && body1Style}
  ${({ body2 }) => body2 && body2Style}
  ${({ body3 }) => body3 && body3Style}
  ${({ button }) => button && buttonStyle}
  ${({ caption1 }) => caption1 && caption1Style}
  ${({ caption2 }) => caption2 && caption2Style}
  ${({ heading1 }) => heading1 && heading1Style}
  ${({ heading2 }) => heading2 && heading2Style}
  ${({ title1 }) => title1 && title1Style};
  ${({ title2 }) => title2 && title2Style}

  /* position */
  ${({ center }) => center && centerStyle}
  ${({ right }) => right && rightStyle}
`;

export default Text;
