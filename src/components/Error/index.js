import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.div`
`;

const Title = styled.h3`
  color: red;
  font-weight: bold;
`;

const Description = styled.p`
  color: red;
`;

export class Error extends PureComponent {
  static defaultProps = {
    title: 'Some error',
    children: 'Something went wrong... :(',
  };

  render() {
    const { title, children } = this.props;
  
    return (
      <Root>
        <Title>
          {title}
        </Title>
        <Description>
          {children}
        </Description>
      </Root>
    );
  }
}
