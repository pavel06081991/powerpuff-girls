import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Error } from '../Error';

const Root = styled.div`
`;

const Logo = styled.img`
`;

const Title = styled.h2`
`;

const Description = styled.div`
`;

const EpisodesList = styled.ul`
  ${({ theme: { mixins } }) => mixins.resetListStyles}
`;

const Episode = styled.li`
`;

const EpisodeLogo = styled.img`
`;

export class Show extends PureComponent {
  static defaultProps = {
    details: {
      show: null,
      episodes: [],
    },
    error: false,
  };

  componentDidMount() {
    const { onInit, match } = this.props;
    onInit(match.params.showId);
  }

  render() {
    const { details, error } = this.props;
  
    return (
      <Root>
        {!error && details.show && (
          <Fragment>
            <Logo src={details.show.image.medium} />
            <Title>
              {details.show.name}
            </Title>
            <Description dangerouslySetInnerHTML={{ __html: details.show.summary }} />
            <EpisodesList>
              {details.episodes.map((episode) => (
                <Episode key={episode.id}>
                  <Link to={`/show/${details.show.id}/${episode.season}/${episode.number}`}>
                    <EpisodeLogo src={episode.image ? episode.image.medium : ''} />
                  </Link>
                </Episode>
              ))}
            </EpisodesList>
          </Fragment>
        )}
        {error && (
          <Error />
        )}
      </Root>
    );
  }
}
