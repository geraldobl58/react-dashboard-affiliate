import React, { useState, useEffect } from 'react';

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

import MUIDataTable from 'mui-datatables';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import Appshell from '../../components/Appshell';

import columns from './tableHeadCells';
import options from '../../utils/muiDataTableDefaultOptions';

import api from '../../services/api';

import {
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
  DividerSeparator,
} from '../../components/Container';

import { ContainerButton } from './styles';

const Payments = () => {
  const { setMessageAttrs } = useMessages();
  const { setIsLoading } = useLoading();

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function getPayments() {
      try {
        setIsLoading(true);
        const response = await api.get(`/pagamentos/`);
        console.log(response.data);
        setPayments(response.data);
        setIsLoading(false);
      } catch (err) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: `${err}` || 'Whoops: Houve erro no servidor!',
        });
      }
    }
    getPayments();
  }, [setIsLoading, setMessageAttrs]);

  return (
    <ContainerWrapper>
      <Appshell>Pagamentos</Appshell>

      <ContainerMain>
        <ContainerSeparator />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              id="date"
              label="Data Inicial"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              // value={startDate}
              // onChange={(e) => setStartDate(e.target.value)}
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
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel>Bandeira</InputLabel>
              <Select
                // value={typeComission}
                // onChange={(e) => setTypeComission(e.target.value)}
                label="Bandeira"
              >
                <MenuItem>Menu</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel>Publisher</InputLabel>
              <Select
                // value={descriptionComission}
                // onChange={(e) => setDescriptionComission(e.target.value)}
                label="Publisher"
              >
                <MenuItem>Menu</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel>Sku</InputLabel>
              <Select
                // value={descriptionComission}
                // onChange={(e) => setDescriptionComission(e.target.value)}
                label="Sku"
              >
                <MenuItem>Menu</MenuItem>
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
                // onClick={resetForm}
                // disabled={
                //   !startDate ||
                //   !endDate ||
                //   !typeComission ||
                //   !descriptionComission
                // }
              >
                Limpar
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                // onClick={search}
                // disabled={
                //   !startDate ||
                //   !endDate ||
                //   !typeComission ||
                //   !descriptionComission
                // }
              >
                Buscar
              </Button>
            </ContainerButton>
          </Grid>
        </Grid>
        <DividerSeparator />
        <MUIDataTable
          title="4 items encontrados"
          data={payments}
          columns={columns}
          options={options}
        />
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Payments;
