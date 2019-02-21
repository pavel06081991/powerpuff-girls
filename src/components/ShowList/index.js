import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Error } from '../Error';

const Root = styled.div`
`;

const List = styled.ul`
  ${({ theme: { mixins } }) => mixins.resetListStyles}
`;

const Item = styled.li`
`;

const Logo = styled.img`
`;

export class ShowList extends PureComponent {
  static defaultProps = {
    list: null,
    error: false,
  };

  componentDidMount() {
    const { onInit } = this.props;
    onInit();
  }

  render() {
    const { list, error } = this.props;
  
    return (
      <Root>
        {!error && list && (
          <List>
            {list.map((showData) => (
              <Item key={showData.show.id}>
                <Link to={`/show/${showData.show.id}`}>
                  <Logo src={showData.show.image.medium} />
                </Link>
              </Item>
            ))}
          </List>
        )}
        {error && (
          <Error />
        )}
      </Root>
    );
  }
}
