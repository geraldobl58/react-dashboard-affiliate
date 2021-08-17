import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import Appshell from '../../components/Appshell';

import {
  ContainerWrapper,
  ContainerMain,
  ContainerSeparator,
  DividerSeparator,
} from '../../components/Container';

import api from '../../services/api';

import { ContainerButton } from './styles';

const Historic = () => {
  const { setMessageAttrs } = useMessages();
  const { setIsLoading } = useLoading();

  const [searchHistorics, setSearchHistorics] = useState([]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const resetForm = () => {
    setStartDate('');
    setEndDate('');
  };

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/encerrados/`, {
        params: {
          dataInicial: startDate,
          dataFinal: endDate,
        },
      });

      if (response.data.length === 0) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: 'Whoops: Nenhum resultado encontrado com seu filtro!',
        });
      }

      setSearchHistorics(response.data);
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
      <Appshell>Histórico</Appshell>
      <ContainerMain>
        <ContainerSeparator />
        <Grid container spacing={3}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ContainerButton>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginRight: '20px' }}
                onClick={resetForm}
                disabled={!startDate || !endDate}
              >
                Limpar
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                onClick={search}
                disabled={!startDate || !endDate}
              >
                Buscar
              </Button>
            </ContainerButton>
          </Grid>
        </Grid>
        <ContainerSeparator />
        {searchHistorics.length > 0 && (
          <>
            <Typography>{`${searchHistorics.length} ${
              searchHistorics.length === 1
                ? 'comissão encontrada'
                : 'comissões encontradas'
            } `}</Typography>

            <DividerSeparator />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Perído Ativo</TableCell>
                    <TableCell>Receita</TableCell>
                    <TableCell>Comissão</TableCell>
                    <TableCell>Taxa Média</TableCell>
                    <TableCell>Roas</TableCell>
                    <TableCell>Encerrado</TableCell>
                    <TableCell>Usuário</TableCell>
                    <TableCell>Observação</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchHistorics.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.dataInicial}
                      </TableCell>
                      <TableCell>{item.dataFinal}</TableCell>
                      <TableCell>{item.comissao}</TableCell>
                      <TableCell>{item.taxaMedia}</TableCell>
                      <TableCell>{item.roas}</TableCell>
                      <TableCell>{item.encerrado}</TableCell>
                      <TableCell>{item.usuario}</TableCell>
                      <TableCell>{item.observacao}</TableCell>
                      <TableCell>
                        <Link to="/">detalhes</Link>
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

export default Historic;
