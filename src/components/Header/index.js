import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.header`
  background-color: #c9c19f;
`;

const RootInner = styled.div`
  ${({ theme: { mixins } }) => mixins.pageCenter}
`;

export class Header extends PureComponent {
  render() {
    return (
      <Root>
        <RootInner>
          Header
        </RootInner>
      </Root>
    );
  }
}
