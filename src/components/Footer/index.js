import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  font-size: 1em;
  padding: 10px 20px;
  background-color: #3F3F3F;
  color: white;
`;

const RootInner = styled.div`
  ${({ theme: { mixins } }) => mixins.pageCenter}
`;

export class Footer extends PureComponent {
  render() {
    return (
      <Root>
        <RootInner>
          All rights reserved
        </RootInner>
      </Root>
    );
  }
}
