// cSpell:Ignore Cabecalho, secoes, servicos
import React from 'react';
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import ApartmentIcon from '@material-ui/icons/Apartment';
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'


const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flex: 1     
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.main
   
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: '#FFFFFF'
  },
}));

const Cabecalho = (params) => {
  const classes = useStyles();
  const history = useHistory() //redirecionar a página
  const secoes = [
    { titulo: 'Produtos', url: '/#/produtos' },
    { titulo: 'Serviços', url: '/#/servicos' },
    { titulo: 'SAC', url: '/#/sac' },
    { titulo: 'FAQ', url: '/#/faq' },
    { titulo: 'Área Reservada', url: '/#/login' }
  ]

  const titulo = 'Empresa Delta'

   return (
    <React.Fragment>
        <AppBar position="relative">
      <Toolbar>
        <ApartmentIcon />
        <Typography
          component="h1"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {titulo}
        </Typography>
        {localStorage.getItem("logado") !== btoa(process.env.REACT_APP_USER)
        ? <Button variant="contained"
                startIcon={<LockedOutlinedIcon/>}
                color="secondary" 
                size="small"
                href="/#/login"
                >
          Login
        </Button>
        :
        <Button variant="contained"
                startIcon={<ExitToAppIcon/>}
                color="secondary" 
                size="small"
                onClick={() => {
                  localStorage.removeItem("logado")
                  history.push("/#/login")
                }}
                >
          Logout
        </Button>
        }
        
      </Toolbar>
      </AppBar>
      {/* dense indica ajuste no espaço vertical */}
      {localStorage.getItem("logado") !== btoa(process.env.REACT_APP_USER) &&
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {secoes.map((section) => (
          <Link
            color="secondary"
            noWrap
            key={section.titulo}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.titulo}
          </Link>
        ))}
      </Toolbar>
      }
    </React.Fragment>
  );
}

export default Cabecalho

Cabecalho.propTypes = {
  secoes: PropTypes.array,
  titulo: PropTypes.string,
};