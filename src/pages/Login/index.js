// cSpell:Ignore usuario, botao
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Copyright from "../Copyright"
/* Material-Ui Imports  */
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"

import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import HomeIcon from "@material-ui/icons/Home"

/*
Fonte do código:
https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
*/

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  ultimoBotao: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Login() {
  const classes = useStyles() //estilos do Material-UI
  const history = useHistory() //redirecionar a página
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [lembrarUsuario, setLembrarUsuario] = useState(false)
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true)
  const [helperText, setHelperText] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    if (email.trim() && senha.trim()) {
      setBotaoDesabilitado(false);
    } else {
      setBotaoDesabilitado(true);
    }
  }, [email, senha]);

  // Nota: O array [] deps vazio significa
  // que este useEffect será executado uma vez
  // semelhante ao componentDidMount()
  useEffect(() => {    
      document.title = 'Área Reservada';     
    if (localStorage.getItem("usuario")) {
      setLembrarUsuario(true);
      setEmail(localStorage.getItem("usuario"));
    }
  }, []);

  useEffect(() => {
    if (lembrarUsuario) {
      localStorage.setItem("usuario", email);
    } else {
      localStorage.removeItem("usuario");
    }
  }, [lembrarUsuario, email]);

  const alteraLembrar = e => {
    setLembrarUsuario(!lembrarUsuario);
  };
  const validaLogin = e => {
    e.preventDefault();
    if (email === process.env.REACT_APP_USER && senha === process.env.REACT_APP_PASSWORD) {
      setError(false)
      setHelperText("Login OK! Aguarde...")
      //btoa converte a string para Base64
      localStorage.setItem("logado", btoa(email))
      history.push("/menu")
    } else {
      setError(true);
      setHelperText("O usuário ou a senha informados são inválidos!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
<Paper elevation={3} >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Área Reservada
        </Typography>
        <form className={classes.form} noValidate onSubmit={validaLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={error}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            error={error}
            helperText={helperText}
          />
          <FormControlLabel
            control={
              <Switch
                checked={lembrarUsuario}
                onChange={alteraLembrar}
                name="lembrar"
                disabled={botaoDesabilitado}
              />
            }
            label="Lembrar o usuário"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={botaoDesabilitado}
            
          >
            <LockOutlinedIcon /> Acessar
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            href="/"
            className={classes.ultimoBotao}
          >
            <HomeIcon /> Voltar ao Início
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Ainda não tem uma conta?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* Para consultar os diferentes espaçamentos: https://material-ui.com/pt/system/spacing/ */}
      <Box m={8}>
        <Copyright />
      </Box>
      </Paper>
    </Container>
  );
}

/*
// Mesmo em browsers modernos, há caracteres que podem fazer quebrar a função nativa btoa() 
function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
*/