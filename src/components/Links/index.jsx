import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { Container } from './styles';

export const Links = (
  <>
    <Container>
      <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/comissoes">
        <ListItem button>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Comissões" />
        </ListItem>
      </Link>
    </Container>
  </>
);
