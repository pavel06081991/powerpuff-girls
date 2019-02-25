import React, { Fragment } from 'react';
import styled from 'styled-components';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { NavLink } from 'react-router-dom';

export const Root = styled.div`
  display: flex;
  margin: 0 0 10px;
`;

export const Separator = styled.span`
  padding: 0 5px;
`;

export const routes = [
  { path: '/show', breadcrumb: 'Show List' },
];

const BreadcrumbsComponent = ({ breadcrumbs }) => (
  <Root>
    {breadcrumbs.map((breadcrumb, index) => (
      <Fragment key={breadcrumb.key}>
        <NavLink to={breadcrumb.props.match.url}>
          {breadcrumb}
        </NavLink>
        <Separator>
          {(index < breadcrumbs.length - 1) && <i> / </i>}
        </Separator>
      </Fragment>
    ))}
  </Root>
);

export const Breadcrumbs = withBreadcrumbs(routes)(BreadcrumbsComponent);