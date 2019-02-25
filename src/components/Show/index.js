import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Error } from '../Error';
import { SectionTitle } from '../SectionTitle';
import { SectionSubtitle } from '../SectionSubtitle';
import { PreviewList, PreviewListItem, PreviewListItemLogo } from '../PreviewList';

const Root = styled.div`
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
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
            <SectionTitle>
              {details.show.name}
            </SectionTitle>
            <Info>
              <Logo src={details.show.image.medium} />
              <Description dangerouslySetInnerHTML={{ __html: details.show.summary }} />
            </Info>
            <SectionSubtitle>
              Episodes
            </SectionSubtitle>
            <PreviewList>
              {details.episodes.map((episode) => (
                <PreviewListItem key={episode.id}>
                  <Link to={`/show/${details.show.id}/${episode.season}/${episode.number}`}>
                    <PreviewListItemLogo src={episode.image ? episode.image.medium : ''} />
                  </Link>
                </PreviewListItem>
              ))}
            </PreviewList>
          </Fragment>
        )}
        {error && (
          <Error />
        )}
      </Root>
    );
  }
}
