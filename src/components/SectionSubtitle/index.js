import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const Root = styled.h2`
  margin: 0 0 10px;
`;

export class SectionSubtitle extends PureComponent {
  render() {
    const { children } = this.props;
  
    return (
      <Root>
        {children}
      </Root>
    );
  }
}
