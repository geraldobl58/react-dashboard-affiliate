import React from 'react';
import PropTypes from 'prop-types';

import { Grid, TextField, Button } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import { ContainerButton } from './styles';

const HistoricForm = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  resetForm,
  search,
}) => {
  return (
    <>
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
    </>
  );
};

export default HistoricForm;

HistoricForm.propTypes = {
  startDate: PropTypes.string.isRequired,
  setStartDate: PropTypes.func.isRequired,
  endDate: PropTypes.string.isRequired,
  setEndDate: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};
