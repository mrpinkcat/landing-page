import React from 'react';
import styled from 'styled-components';

import OpenSourceCategory from './OpenSourceCategory';
import PerformanceCategory from './PerformanceCategory';
import UserFriendlyCategory from './UserFriendlyCategory';

const ContainerEl = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

const CategoryEl = styled.div``;

export default class Categories extends React.Component {
  render() {
    return (
      <ContainerEl>
        <CategoryEl>
          <PerformanceCategory />
        </CategoryEl>

        <CategoryEl>
          <OpenSourceCategory />
        </CategoryEl>

        <CategoryEl>
          <UserFriendlyCategory />
        </CategoryEl>
      </ContainerEl>
    );
  }
}
