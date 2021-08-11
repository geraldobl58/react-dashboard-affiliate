import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import dateFormatted from '../../utils/dateFormatted';

import { DividerSeparator } from '../../components/Container';

const CommissionsTable = ({ searchComissions }) => {
  return (
    <>
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
    </>
  );
};

export default CommissionsTable;

CommissionsTable.propTypes = {
  searchComissions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
