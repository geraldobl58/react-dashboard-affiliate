import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

import { DividerSeparator } from '../../components/Container';

const HistoricTable = ({ searchHistorics }) => {
  return (
    <>
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
    </>
  );
};

export default HistoricTable;

HistoricTable.propTypes = {
  searchHistorics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
