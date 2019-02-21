import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const Root = styled.div`
  background-color: green;
`;

const RootInner = styled.section`
  ${({ theme: { mixins } }) => mixins.pageCenter}
`;

export class Content extends PureComponent {
  render() {
    const { children } = this.props;
  
    return (
      <Root>
        <RootInner>
          {children}
        </RootInner>
      </Root>
    );
  }
}
