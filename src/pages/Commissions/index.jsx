import React, { useState, useEffect } from 'react';

import { Button, Grid, Typography } from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';

import api from '../../services/api';

import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';
import { useModal } from '../../hooks/ModalCustom';

import Appshell from '../../components/Appshell';

import CommissionsTable from '../../template/CommissionsTable';
import CommissionsForm from '../../template/CommissionsForm';
import CommissionsNew from '../../template/CommissionsNew';

import {
  ContainerHeader,
  ContainerMain,
  ContainerSeparator,
  ContainerWrapper,
  DividerSeparator,
} from '../../components/Container';

const Commissions = () => {
  const { setMessageAttrs } = useMessages();
  const { setIsLoading } = useLoading();

  const { handleClickOpen } = useModal();

  const [commissions, setCommissions] = useState([]);

  const [searchComissions, setSearchComissions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [typeComission, setTypeComission] = useState('');
  const [descriptionComission, setDescriptionComission] = useState('');

  useEffect(() => {
    async function getCommissions() {
      try {
        setIsLoading(true);
        const response = await api.get(`/comissoes`);
        setCommissions(response.data);
        setIsLoading(false);
      } catch (err) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: `${err}` || 'Whoops: Houve erro no servidor!',
        });
      }
    }
    getCommissions();
  }, [setMessageAttrs, setIsLoading]);

  const resetForm = () => {
    setStartDate('');
    setEndDate('');
    setTypeComission('');
    setDescriptionComission('');
  };

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/comissoes/`, {
        params: {
          dataInicial: startDate,
          dataFinal: endDate,
          tipo: typeComission,
          descricao: descriptionComission,
        },
      });

      if (response.data.length === 0) {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: 'Whoops: Nenhum resultado encontrado com seu filtro!',
        });
      }

      setSearchComissions(response.data);
      resetForm();
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
      <Appshell>
        <ContainerHeader>
          Comissões{' '}
          <Button color="secondary" onClick={handleClickOpen}>
            Criar Comissão
          </Button>
        </ContainerHeader>
      </Appshell>
      <CommissionsNew />
      <ContainerMain>
        <ContainerSeparator />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Alert severity="warning">
              <Typography variant="caption">
                Selecione o fitro para gerar informações.
              </Typography>
            </Alert>
          </Grid>
        </Grid>
        <DividerSeparator />
        <CommissionsForm
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          typeComission={typeComission}
          setTypeComission={setTypeComission}
          commissions={commissions}
          descriptionComission={descriptionComission}
          setDescriptionComission={setDescriptionComission}
          resetForm={resetForm}
          search={search}
        />
        <DividerSeparator />
        <CommissionsTable searchComissions={searchComissions} />
      </ContainerMain>
    </ContainerWrapper>
  );
};

export default Commissions;
