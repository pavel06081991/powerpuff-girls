import styled from 'styled-components';

export const PreviewList = styled.ul`
  ${({ theme: { mixins } }) => mixins.resetListStyles}

  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px 0 0;

  ${({ theme: { mixins, size } }) => mixins.breakpoints[size.SM]`
    justify-content: space-between;
  `}
`;

export const PreviewListItem = styled.li`
  flex: 0 0 1;
  width: 200px;
  height: 270px;
  margin: 0 20px 20px 0;
  transform: rotate(10deg);

  ${({ theme: { mixins, size } }) => mixins.breakpoints[size.SM]`
    width: 170px;
    height: 240px;
    transform: rotate(0deg);
  `}

  &>a {
    display: block;
    width: 100%;
    height: 100%;

    &>img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const PreviewListItemLogo = styled.img`
`;
