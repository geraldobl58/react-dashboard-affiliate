import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import MUIDataTable from 'mui-datatables';

import columns from './tableHeadCells';
import options from '../../utils/muiDataTableDefaultOptions';

import { ContainerTable } from './styles';

const PaymentsTable = ({ paymentSearch }) => {
  return (
    <ContainerTable>
      {paymentSearch.length > 0 && (
        <MUIDataTable
          title={
            <Typography variant="caption">
              {paymentSearch.length}{' '}
              {paymentSearch.length === 1
                ? 'item encontrado'
                : 'itens encontrados'}
            </Typography>
          }
          data={paymentSearch}
          columns={columns}
          options={options}
        />
      )}
    </ContainerTable>
  );
};

export default PaymentsTable;

PaymentsTable.propTypes = {
  paymentSearch: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
