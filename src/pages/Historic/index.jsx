import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

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

import HistoricForm from '../../template/HistoricForm';

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
        <HistoricForm
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          resetForm={resetForm}
          search={search}
        />
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
                        <Link to={`/historico/${item.id}`}>detalhes</Link>
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
