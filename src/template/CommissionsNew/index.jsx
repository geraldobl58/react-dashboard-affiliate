/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import {
  Button,
  Dialog,
  Slide,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import { useModal } from '../../hooks/ModalCustom';
import { useMessages } from '../../hooks/Messages';
import { useLoading } from '../../hooks/Loading';

import api from '../../services/api';

import { ContainerTitle } from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CommissionsNew = () => {
  const { modalOpen, handleClose } = useModal();
  const { setMessageAttrs } = useMessages();
  const { setIsLoading } = useLoading();

  const [newStartDate, setNewStartDate] = useState('');
  const [newEndDate, setNewEndDate] = useState('');
  const [newTypeComission, setNewTypeComission] = useState('');
  const [newDescriptionComission, setNewDescriptionComission] = useState('');
  const [network, setNetwork] = useState('');
  const [publisher, setPublisher] = useState('');
  const [reason, setReason] = useState('');

  const resetForm = () => {
    setNewStartDate('');
    setNewEndDate('');
    setNewTypeComission('');
    setNewDescriptionComission('');
    setNetwork('');
    setPublisher('');
    setReason('');
  };

  const saveCommision = async () => {
    try {
      setIsLoading(true);
      await api.post(`/comissoes`, {
        dataInicial: newStartDate,
        dataFinal: newEndDate,
        tipo: newTypeComission,
        descricao: newDescriptionComission.toLowerCase(),
        rede: network,
        publisher,
        motivo: reason.toLowerCase(),
      });
      resetForm();
      setIsLoading(false);

      setMessageAttrs({
        show: true,
        severity: 'success',
        text: 'Sucesso: Registro salvo com sucesso.',
      });
    } catch (err) {
      setMessageAttrs({
        show: true,
        severity: 'error',
        text: `${err}` || 'Whoops: Houve erro no servidor!',
      });
    }
  };

  const closeModalReload = () => {
    handleClose();

    window.location.reload();
  };

  return (
    <Dialog
      open={modalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="md"
    >
      <DialogTitle>
        <ContainerTitle>
          <strong>Criar Nova Comissão</strong>
          <span>
            <CloseIcon color="primary" onClick={closeModalReload} />
          </span>
        </ContainerTitle>
      </DialogTitle>
      <DialogContent style={{ minHeight: '250px' }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Data Inicial"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={newStartDate}
              onChange={(e) => setNewStartDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Data Final"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={newEndDate}
              onChange={(e) => setNewEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel>Tipo de Comissão</InputLabel>
              <Select
                value={newTypeComission}
                onChange={(e) => setNewTypeComission(e.target.value)}
                label="Tipo de Comissão"
              >
                <MenuItem value="sku">Sku</MenuItem>
                <MenuItem value="marca">Marca</MenuItem>
                <MenuItem value="departamento">Departamento</MenuItem>
                <MenuItem value="vertical">Vertical</MenuItem>
                <MenuItem value="publisher">Publisher</MenuItem>
                <MenuItem value="rede">Rede</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Descriação comissão"
              InputLabelProps={{
                shrink: true,
              }}
              value={newDescriptionComission}
              onChange={(e) => setNewDescriptionComission(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="% Rede"
              InputLabelProps={{
                shrink: true,
              }}
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="% Publisher"
              InputLabelProps={{
                shrink: true,
              }}
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Motivo"
              InputLabelProps={{
                shrink: true,
              }}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={saveCommision} variant="contained" color="primary">
          Criar Comissão
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommissionsNew;
