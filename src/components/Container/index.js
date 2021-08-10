import styled from 'styled-components';

import { Paper } from '@material-ui/core';

export const ContainerWrapper = styled.div`
  display: flex;
`;

export const ContainerMain = styled.main`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
  padding: 20px;
`;

export const ContainerSeparator = styled.div`
  min-height: 64px;
`;

export const ContainerPaper = styled(Paper)`
  padding: 10px;
`;
