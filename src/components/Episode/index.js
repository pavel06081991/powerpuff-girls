import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';

import { Error } from '../Error';
import { SectionTitle } from '../SectionTitle';

const Root = styled.div`
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 250px;
  height: 340px;
  object-fit: cover;
  margin-right: calc(100% - 250px);

  ${({ theme: { mixins, size } }) => mixins.breakpoints[size.SM]`
    margin-right: 0;
  `}
`;

const Description = styled.div`
  width: 100%;
  margin: 20px 0;
  font-size: 22px;

  &>:first-child {
    margin-top: 0;
  }

  ${({ theme: { mixins, size } }) => mixins.breakpoints[size.SM]`
    width: calc(100% - 290px);
    margin: 0 20px;
  `}
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
            <SectionTitle>
              {episode.name}
            </SectionTitle>
            <Info>
              <Logo src={episode.image ? episode.image.medium : ''} />
              <Description dangerouslySetInnerHTML={{ __html: episode.summary }} />
            </Info>
          </Fragment>
        )}
        {error && (
          <Error />
        )}
      </Root>
    );
  }
}
