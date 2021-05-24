/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Container from './Container';
import Request from './Request';

const MainSectionUser = () => {
  return (
    <Container>
      <h2 sx={{ variant: 'mainSectionUser.title' }}>Active Request</h2>
      <Request />
      <h2 sx={{ variant: 'mainSectionUser.title' }}>Past Request</h2>
      <Request />
    </Container>
  );
};

export default MainSectionUser;
