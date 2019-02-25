import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Error } from '../Error';
import { SectionTitle } from '../SectionTitle';
import { PreviewList, PreviewListItem, PreviewListItemLogo } from '../PreviewList';

const Root = styled.div`
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
        <SectionTitle>
          Show list
        </SectionTitle>
        {!error && list && (
          <PreviewList>
            {list.map((showData) => (
              <PreviewListItem key={showData.show.id}>
                <Link to={`/show/${showData.show.id}`}>
                  <PreviewListItemLogo src={showData.show.image.medium} />
                </Link>
              </PreviewListItem>
            ))}
          </PreviewList>
        )}
        {error && (
          <Error />
        )}
      </Root>
    );
  }
}
