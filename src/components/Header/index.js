import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.header`
  font-size: 2em;
  padding: 10px 20px;
  background-color: #3F3F3F;
  color: white;
`;

const RootInner = styled.div`
  ${({ theme: { mixins } }) => mixins.pageCenter}
`;

export class Header extends PureComponent {
  render() {
    return (
      <Root>
        <RootInner>
          Tv show inc.
        </RootInner>
      </Root>
    );
  }
}
