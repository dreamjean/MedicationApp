import React from 'react';
import styled from 'styled-components';

import Text from '../styles/Text';

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return (
    <Container>
      <Message caption1>{error}</Message>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
`;

const Message = styled(Text)`
  ${({ theme: { colors, space } }) => ({
    color: colors.danger,
    marginLeft: space.m2,
  })};
`;

export default ErrorMessage;
