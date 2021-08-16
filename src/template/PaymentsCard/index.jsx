import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import wordUpper from '../../utils/wordToUpper';

import { ContainerCard } from './styles';

const PaymentsCard = ({ paymentSearch }) => {
  return (
    <Grid>
      {paymentSearch.map((item) => (
        <Grid container spacing={3} key={item.id}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {wordUpper(item.bandeira)}
            </Typography>
          </Grid>
          <ContainerCard>
            <Grid item xs={4}>
              <Typography variant="body2" component="p">
                Valor Venda Total
              </Typography>
              <Typography variant="h6">{item.valorVendaTotal}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" component="p">
                Valor Venda Aprovado
              </Typography>
              <Typography variant="h6">{item.valorVendaAprovado}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" component="p">
                Investimento
              </Typography>
              <Typography variant="h6">{item.investimento}</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="body2" component="p">
                Aprovado
              </Typography>
              <Typography variant="h6">{item.aprovado}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" component="p">
                ROAS
              </Typography>
              <Typography variant="h6">{item.roas}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" component="p">
                Visitas
              </Typography>
              <Typography variant="h6">{item.visitas}</Typography>
            </Grid>
          </ContainerCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default PaymentsCard;

PaymentsCard.propTypes = {
  paymentSearch: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
