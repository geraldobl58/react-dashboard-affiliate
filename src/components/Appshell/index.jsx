import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useStyles } from './styles';

import { Links } from '../Links';

const Appshell = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        style={{ height: '100vh' }}
        open={open}
      >
        <div style={{ position: 'fixed', zIndex: '-99' }}>
          <h3
            style={{
              textTransform: 'uppercase',
              fontSize: '20px',
              justifyContent: 'center',
              marginLeft: '20px',
              fontWeight: 'bold',
            }}
          >
            <span>Affiliate Dash.</span>
          </h3>
        </div>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{Links}</List>
      </Drawer>
    </>
  );
};

export default Appshell;

Appshell.propTypes = {
  children: PropTypes.node.isRequired,
};
