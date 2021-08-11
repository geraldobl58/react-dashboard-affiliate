import React, { useState, useEffect } from 'react';

import {
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Typography,
} from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';

import api from '../../services/api';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import Appshell from '../../components/Appshell';
import ButtonCustom from '../../components/ButtonCustom';

import CommissionsTable from '../../template/CommissionsForm';

import {
  ContainerHeader,
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
  DividerSeparator,
} from '../../components/Container';

import { ContainerButton } from './styles';

const Commissions = () => {
  const { setMessageAttrs } = useMessages();
  const { setIsLoading } = useLoading();

  const [commissions, setCommissions] = useState([]);

  const [searchComissions, setSearchComissions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [typeComission, setTypeComission] = useState('');
  const [descriptionComission, setDescriptionComission] = useState('');

  useEffect(() => {
    async function getCommissions() {
      try {
        setIsLoading(true);
        const response = await api.get(`/comissoes`);
        setCommissions(response.data);
        setIsLoading(false);
      } catch (err) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: `${err}` || 'Whoops: Houve erro no servidor!',
        });
      }
    }
    getCommissions();
  }, [setMessageAttrs, setIsLoading]);

  const resetForm = () => {
    setStartDate('');
    setEndDate('');
    setTypeComission('');
    setDescriptionComission('');
  };

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/comissoes/`, {
        params: {
          dataInicial: startDate,
          dataFinal: endDate,
          tipo: typeComission,
          descricao: descriptionComission,
        },
      });

      if (response.data.length === 0) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: 'Whoops: Nenhum resultado encontrado com seu filtro!',
        });
      }

      setSearchComissions(response.data);
      resetForm();
      setIsLoading(false);
    } catch (err) {
      setMessageAttrs({
        show: true,
        severity: 'error',
        text: `${err}` || 'Whoops: Houve erro no servidor!',
      });
    }
  };

  return (
    <ContainerWrapper>
      <Appshell>
        <ContainerHeader>
          Comissões{' '}
          <ButtonCustom color="secondary">Criar Comissão</ButtonCustom>
        </ContainerHeader>
      </Appshell>
      <ContainerMain>
        <ContainerSeparator />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Alert severity="warning">
              <Typography variant="caption">
                Selecione o fitro para gerar informações.
              </Typography>
            </Alert>
          </Grid>
        </Grid>
        <DividerSeparator />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              id="date"
              label="Data Inicial"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="date"
              label="Data Final"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel>Tipo de Comissão</InputLabel>
              <Select
                value={typeComission}
                onChange={(e) => setTypeComission(e.target.value)}
                label="Tipo de Comissão"
              >
                {commissions.map((item) => (
                  <MenuItem key={item.id} value={item.tipo}>
                    {item.tipo}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel>Descrição da Comissão</InputLabel>
              <Select
                value={descriptionComission}
                onChange={(e) => setDescriptionComission(e.target.value)}
                label="Descrição da Comissão"
              >
                {commissions.map((item) => (
                  <MenuItem key={item.id} value={item.descricao}>
                    {item.descricao}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ContainerButton>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginRight: '20px' }}
                onClick={resetForm}
                disabled={
                  !startDate ||
                  !endDate ||
                  !typeComission ||
                  !descriptionComission
                }
              >
                Limpar
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                onClick={search}
                disabled={
                  !startDate ||
                  !endDate ||
                  !typeComission ||
                  !descriptionComission
                }
              >
                Buscar
              </Button>
            </ContainerButton>
          </Grid>
        </Grid>
        <DividerSeparator />
        <CommissionsTable searchComissions={searchComissions} />
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Commissions;
