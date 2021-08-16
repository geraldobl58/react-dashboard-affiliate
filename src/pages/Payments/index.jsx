import React, { useState, useEffect } from 'react';

import { Grid, Typography, Card, CardContent } from '@material-ui/core';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import Appshell from '../../components/Appshell';

import PaymentsForm from '../../template/PaymentsForm';
import PaymentsTable from '../../template/PaymentsTable';

import api from '../../services/api';

import {
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
  DividerSeparator,
} from '../../components/Container';

import { ContainerCard } from './styles';

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
        <PaymentsForm
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          flag={flag}
          setFlag={setFlag}
          publisher={publisher}
          setPublisher={setPublisher}
          sku={sku}
          setSku={setSku}
          payments={payments}
          resetForm={resetForm}
          search={search}
        />
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
        <PaymentsTable paymentSearch={paymentSearch} />
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Payments;
