/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

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
  Typography,
} from '@material-ui/core';

import { useModal } from '../../hooks/ModalCustom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CommissionsNew = () => {
  const { modalOpen, handleClose } = useModal();

  return (
    <Dialog
      open={modalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="md"
    >
      <DialogTitle>
        <Typography color="primary">Criar Nova Comissão</Typography>
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
              // value={startDate}
              // onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Data Final"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel>Tipo de Comissão</InputLabel>
              <Select
                // value={descriptionComission}
                // onChange={(e) => setDescriptionComission(e.target.value)}
                label="Descrição da Comissão"
              >
                <MenuItem>Menu</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Descriação comissão"
              InputLabelProps={{
                shrink: true,
              }}
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="% Rede"
              InputLabelProps={{
                shrink: true,
              }}
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="% Publisher"
              InputLabelProps={{
                shrink: true,
              }}
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Motivo"
              InputLabelProps={{
                shrink: true,
              }}
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="primary">
          Criar Comissão
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommissionsNew;
