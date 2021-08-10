import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Payment from '@material-ui/icons/Payment';

import { Container } from './styles';

export const Links = (
  <>
    <Container>
      <Link to="/dashboard">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/payments">
        <ListItem button>
          <ListItemIcon>
            <Payment />
          </ListItemIcon>
          <ListItemText primary="Pagamentos" />
        </ListItem>
      </Link>
    </Container>
  </>
);
