import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  background-color: #c9c19f;
`;

const RootInner = styled.div`
  ${({ theme: { mixins } }) => mixins.pageCenter}
`;

export class Footer extends PureComponent {
  render() {
    return (
      <Root>
        <RootInner>
          Footer
        </RootInner>
      </Root>
    );
  }
}
