import styled from 'styled-components';

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, getFont, space, size } }) => ({
    color: colors.dark,
    fontSize: size.body3,
    fontFamily: getFont(2),
    marginHorizontal: space.s2,
  })}
`;

export default Input;
