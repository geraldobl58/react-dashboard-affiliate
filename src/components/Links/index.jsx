import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PaymentIcon from '@material-ui/icons/Payment';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import PublishIcon from '@material-ui/icons/Publish';

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
      <Link to="/pagamentos">
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Pagamentos" />
        </ListItem>
      </Link>
      <Link to="/historico">
        <ListItem button>
          <ListItemIcon>
            <ChangeHistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Histórico" />
        </ListItem>
      </Link>
      <Link to="/publisher">
        <ListItem button>
          <ListItemIcon>
            <PublishIcon />
          </ListItemIcon>
          <ListItemText primary="Publisher" />
        </ListItem>
      </Link>
    </Container>
  </>
);
