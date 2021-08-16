import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import wordUpper from '../../utils/wordToUpper';

import { ContainerButton } from './styles';

const PaymentsForm = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  flag,
  setFlag,
  publisher,
  setPublisher,
  sku,
  setSku,
  payments,
  resetForm,
  search,
}) => {
  return (
    <>
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
        <Grid item xs={2}>
          <FormControl variant="outlined" style={{ width: '100%' }}>
            <InputLabel>Bandeira</InputLabel>
            <Select
              value={flag}
              onChange={(e) => setFlag(e.target.value)}
              label="Bandeira"
            >
              {payments.map((item) => (
                <MenuItem key={item.id} value={item.bandeira}>
                  {wordUpper(item.bandeira)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="outlined" style={{ width: '100%' }}>
            <InputLabel>Publisher</InputLabel>
            <Select
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              label="Publisher"
            >
              {payments.map((item) => (
                <MenuItem key={item.id} value={item.publisher}>
                  {wordUpper(item.publisher)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="outlined" style={{ width: '100%' }}>
            <InputLabel>Sku</InputLabel>
            <Select
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              label="Sku"
            >
              {payments.map((item) => (
                <MenuItem key={item.id} value={item.sku}>
                  {item.sku}
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
              disabled={!startDate || !endDate || !flag || !publisher || !sku}
            >
              Limpar
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              onClick={search}
              disabled={!startDate || !endDate || !flag || !publisher || !sku}
            >
              Buscar
            </Button>
          </ContainerButton>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentsForm;

PaymentsForm.propTypes = {
  startDate: PropTypes.string.isRequired,
  setStartDate: PropTypes.func.isRequired,
  endDate: PropTypes.string.isRequired,
  setEndDate: PropTypes.func.isRequired,
  flag: PropTypes.string.isRequired,
  setFlag: PropTypes.func.isRequired,
  publisher: PropTypes.string.isRequired,
  setPublisher: PropTypes.func.isRequired,
  sku: PropTypes.string.isRequired,
  setSku: PropTypes.func.isRequired,
  payments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  resetForm: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};
