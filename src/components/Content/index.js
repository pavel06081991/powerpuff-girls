import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const Root = styled.div`
  padding: 10px 20px;
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
