import React, { useState, useEffect } from 'react';

import {
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import MUIDataTable from 'mui-datatables';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import Appshell from '../../components/Appshell';

import columns from './tableHeadCells';
import options from '../../utils/muiDataTableDefaultOptions';
import wordUpper from '../../utils/wordToUpper';

import api from '../../services/api';

import {
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
  DividerSeparator,
} from '../../components/Container';

import { ContainerButton, ContainerTable, ContainerCard } from './styles';

const Payments = () => {
  const { setMessageAttrs } = useMessages();
  const { setIsLoading } = useLoading();

  const [paymentSearch, setPaymentSearch] = useState([]);
  const [payments, setPayments] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [flag, setFlag] = useState('');
  const [publisher, setPublisher] = useState('');
  const [sku, setSku] = useState('');

  useEffect(() => {
    async function getPayments() {
      try {
        setIsLoading(true);
        const response = await api.get(`/pagamentos/`);
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

  const resetForm = () => {
    setStartDate('');
    setEndDate('');
    setFlag('');
    setPublisher('');
    setSku('');
  };

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/pagamentos/`, {
        params: {
          dataInicial: startDate,
          dataFinal: endDate,
          bandeira: flag,
          publisher,
          sku,
        },
      });

      if (response.data.length === 0) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: 'Whoops: Nenhum resultado encontrado com seu filtro!',
        });
      }

      setPaymentSearch(response.data);
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
        <DividerSeparator />
        <Grid>
          <Grid container spacing={3}>
            {paymentSearch.map((item) => (
              <Grid item xs={12} key={item.id}>
                <ContainerCard>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Bandeira: {item.bandeira}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Valor Venda Total
                      </Typography>
                      <Typography variant="h6">
                        {item.valorVendaTotal}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Valor Venda Aprovado
                      </Typography>
                      <Typography variant="h6">
                        {item.valorVendaAprovado}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Investimento
                      </Typography>
                      <Typography variant="h6">{item.investimento}</Typography>
                      <Typography variant="body2" component="p">
                        Aprovado
                      </Typography>
                      <Typography variant="h6">{item.aprovado}</Typography>
                      <Typography variant="body2" component="p">
                        ROAS
                      </Typography>
                      <Typography variant="h6">{item.roas}</Typography>
                      <Typography variant="body2" component="p">
                        Visitas
                      </Typography>
                      <Typography variant="h6">{item.visitas}</Typography>
                    </CardContent>
                  </Card>
                </ContainerCard>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <DividerSeparator />
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
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Payments;
