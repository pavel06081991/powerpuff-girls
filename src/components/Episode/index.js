import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';

import { Error } from '../Error';

const Root = styled.div`
  ${({ theme: { mixins, size } }) => mixins.breakpoints[size.MD]`
    background-color: orange;
    display: flex;
  `}
`;

const Logo = styled.img`
`;

const Title = styled.h2`
  margin: 10px;

  ${({ theme: { mixins, size } }) => mixins.breakpoints[size.MD]`
    padding: 0 20px;
  `}

  ${({ theme: { mixins, size } }) => mixins.exactBreakpoints[size.MD]`
    color: blue;
  `}
`;

const Description = styled.div`
`;

export class Episode extends PureComponent {
  static defaultProps = {
    episode: null,
    error: false,
  };

  componentDidMount() {
    const { onInit, match } = this.props;
    onInit(match.params.showId, match.params.seasonId, match.params.episodeId);
  }

  render() {
    const { error, episode } = this.props;
  
    return (
      <Root>
        {!error && episode && (
          <Fragment>
            <Logo src={episode.image.medium} />
            <Title>
              {episode.name}
            </Title>
            <Description dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </Fragment>
        )}
        {error && (
          <Error />
        )}
      </Root>
    );
  }
}
