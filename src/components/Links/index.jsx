import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';

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
    </Container>
  </>
);
