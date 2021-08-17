import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Grid, Paper, Typography } from '@material-ui/core';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import Appshell from '../../components/Appshell';

import api from '../../services/api';

import {
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
  DividerSeparator,
} from '../../components/Container';

const HistoricSingle = () => {
  const { setMessageAttrs } = useMessages();
  const { setIsLoading } = useLoading();

  const {
    params: { id },
  } = useRouteMatch();

  const [historic, setHistoric] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await api.get(`/encerrados/${id}`);
        setHistoric(response.data);
        setIsLoading(false);
      } catch (err) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: `${err}` || 'Whoops: Houve erro no servidor!',
        });
      }
    }
    getData();
  }, [id, setIsLoading, setMessageAttrs]);

  return (
    <ContainerWrapper>
      <Appshell>Histórico</Appshell>
      <ContainerMain>
        <ContainerSeparator />
        <DividerSeparator />
        <Grid container spacing={3} component={Paper}>
          <Grid item xs={2}>
            <Typography variant="caption">Período Ativo</Typography>
            <Typography variant="subtitle1">{historic.dataInicial}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="caption">Receita</Typography>
            <Typography variant="subtitle1">{historic.receita}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="caption">Taxa Média</Typography>
            <Typography variant="subtitle1">{historic.taxaMedia}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="caption">Encerrado</Typography>
            <Typography variant="subtitle1">{historic.encerrado}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="caption">Usuário</Typography>
            <Typography variant="subtitle1">{historic.usuario}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="caption">Período Ativo</Typography>
            <Typography variant="subtitle1">{historic.observacao}</Typography>
          </Grid>
        </Grid>
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default HistoricSingle;
