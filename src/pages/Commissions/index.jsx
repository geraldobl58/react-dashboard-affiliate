import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import Appshell from '../../components/Appshell';
import ButtonCustom from '../../components/ButtonCustom';

import {
  ContainerHeader,
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
} from '../../components/Container';

const Commissions = () => (
  <ContainerWrapper>
    <Appshell>
      <ContainerHeader>
        Comissões <ButtonCustom color="secondary">Criar Comissão</ButtonCustom>
      </ContainerHeader>
    </Appshell>
    <ContainerMain>
      <ContainerSeparator />
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography>Commissions</Typography>
        </Grid>
      </Grid>
    </ContainerMain>
  </ContainerWrapper>
);

export default Commissions;
