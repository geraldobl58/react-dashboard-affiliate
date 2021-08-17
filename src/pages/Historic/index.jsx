import React, { useState } from 'react';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import Appshell from '../../components/Appshell';

import HistoricForm from '../../template/HistoricForm';

import {
  ContainerWrapper,
  ContainerMain,
  ContainerSeparator,
} from '../../components/Container';

import api from '../../services/api';
import HistoricTable from '../../template/HistoricTable';

const Historic = () => {
  const { setMessageAttrs } = useMessages();
  const { setIsLoading } = useLoading();

  const [searchHistorics, setSearchHistorics] = useState([]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const resetForm = () => {
    setStartDate('');
    setEndDate('');
  };

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/encerrados/`, {
        params: {
          dataInicial: startDate,
          dataFinal: endDate,
        },
      });

      if (response.data.length === 0) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: 'Whoops: Nenhum resultado encontrado com seu filtro!',
        });
      }

      setSearchHistorics(response.data);
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
      <Appshell>Histórico</Appshell>
      <ContainerMain>
        <ContainerSeparator />
        <HistoricForm
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          resetForm={resetForm}
          search={search}
        />
        <ContainerSeparator />
        <HistoricTable searchHistorics={searchHistorics} />
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Historic;
