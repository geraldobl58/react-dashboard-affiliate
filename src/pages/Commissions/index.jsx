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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';

import api from '../../services/api';
import dateFormatted from '../../utils/dateFormatted';

import { useMessages } from '../../hooks/Messages';

import Appshell from '../../components/Appshell';
import ButtonCustom from '../../components/ButtonCustom';

import {
  ContainerHeader,
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
} from '../../components/Container';

import { ContainerButton, DividerSeparator } from './styles';

const Commissions = () => {
  const { setMessageAttrs } = useMessages();

  const [commissions, setCommissions] = useState([]);

  const [searchComissions, setSearchComissions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [typeComission, setTypeComission] = useState('');
  const [descriptionComission, setDescriptionComission] = useState('');

  useEffect(() => {
    async function getCommissions() {
      try {
        const response = await api.get(`/comissoes`);
        setCommissions(response.data);
      } catch (err) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: `${err}` || 'Whoops: Houve erro no servidor!',
        });
      }
    }
    getCommissions();
  }, [setMessageAttrs]);

  const resetForm = () => {
    setStartDate('');
    setEndDate('');
    setTypeComission('');
    setDescriptionComission('');
  };

  const search = async () => {
    try {
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
        {searchComissions.length > 0 && (
          <>
            <Typography>{`${searchComissions.length} ${
              searchComissions.length === 1
                ? 'comissão encontrada'
                : 'comissões encontradas'
            } `}</Typography>

            <DividerSeparator />
            <TableContainer component={Paper}>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>% Rede</TableCell>
                    <TableCell>% Publisher</TableCell>
                    <TableCell>Motivo</TableCell>
                    <TableCell>Período</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchComissions.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.tipo}
                      </TableCell>
                      <TableCell>{item.descricao}</TableCell>
                      <TableCell>{item.rede}</TableCell>
                      <TableCell>{item.publisher}</TableCell>
                      <TableCell>{item.motivo}</TableCell>
                      <TableCell>
                        {dateFormatted(item.dataInicial)} até{' '}
                        {dateFormatted(item.dataFinal)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Commissions;
