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

import { ContainerButton } from './styles';

const CommissionsForm = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  typeComission,
  setTypeComission,
  commissions,
  descriptionComission,
  setDescriptionComission,
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
    </>
  );
};

export default CommissionsForm;

CommissionsForm.propTypes = {
  startDate: PropTypes.string.isRequired,
  setStartDate: PropTypes.func.isRequired,
  endDate: PropTypes.string.isRequired,
  setEndDate: PropTypes.func.isRequired,
  typeComission: PropTypes.string.isRequired,
  setTypeComission: PropTypes.func.isRequired,
  commissions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  descriptionComission: PropTypes.string.isRequired,
  setDescriptionComission: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};
