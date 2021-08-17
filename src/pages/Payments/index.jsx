import React, { useState, useEffect } from 'react';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import Appshell from '../../components/Appshell';

import PaymentsForm from '../../template/PaymentsForm';
import PaymentsTable from '../../template/PaymentsTable';
import PaymentsCard from '../../template/PaymentsCard';

import api from '../../services/api';

import {
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
  DividerSeparator,
} from '../../components/Container';

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
        <PaymentsCard paymentSearch={paymentSearch} />
        <DividerSeparator />
        <PaymentsTable paymentSearch={paymentSearch} />
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Payments;
